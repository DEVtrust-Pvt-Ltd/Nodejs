const needle = require('needle');
import { NextFunction, Request, Response } from 'express';
const bearerToken = process.env.BEARER_TOKEN;

const getUserTweets = async (req: Request, res: Response, next: NextFunction) => {
    let userTweets: any[] = [];
    let metaData;
    let resp;
    const userId = req.query.tweetId;
    const url = process.env.TWITTER_API_URL + 'users/' + userId + '/tweets';
    let params = {
        max_results: Number(req.query.max_results),
        'tweet.fields': 'created_at',
        expansions: 'author_id'
    };

    const options = {
        headers: {
            'User-Agent': 'v2UserTweetsJS',
            authorization: `Bearer ${bearerToken}`
        }
    };

    let hasNextPage = true;
    let nextToken = req.query.nextToken;
    let previousToken = req.query.previousToken;
    let userName;

    if (hasNextPage) {
        resp = await getPage(params, options, nextToken, url);
        if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
            metaData = resp.meta;
            userName = resp.includes.users[0].username;
            if (resp.data) {
                userTweets.push.apply(userTweets, resp.data);
            }
            if (resp.meta.next_token) {
                nextToken = resp.meta.next_token;
            } else {
                hasNextPage = false;
            }
        } else {
            hasNextPage = false;
        }
    }

    return res.status(200).json({
        data: userTweets,
        meta: metaData
    });
};

const getPage = async (
    params: { max_results?: number; 'tweet.fields'?: string; expansions?: string; pagination_token?: any },
    options: { headers: { 'User-Agent': string; authorization: string } },
    nextToken: any,
    url: any
) => {
    if (nextToken) {
        params.pagination_token = nextToken;
    }

    try {
        const resp = await needle('get', url, params, options);
        if (resp.statusCode != 200) {
            console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
            return;
        }
        return resp.body;
    } catch (err) {
        throw new Error(`Request failed: ${err}`);
    }
};

export default { getUserTweets };
