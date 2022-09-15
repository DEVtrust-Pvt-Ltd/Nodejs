import express from 'express';
import getUserTweet from '../controllers/getUserTweet';

const router = express.Router();
router.get('/gettweet', getUserTweet.getUserTweets);

export = router;
