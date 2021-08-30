import jwt from "jsonwebtoken";

export default function (sequelize, DataTypes) {
    const Account = sequelize.define("Account", {
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        accountName: {
            type: DataTypes.STRING(100)
        },
        accountRole: {
            type: DataTypes.ENUM,
            values: ["BROWSE", "ADVERTISE", "ADMIN"],
        },
        accountEmail: {
            type: DataTypes.STRING(100),
            unique: true
        },
        accountPassword: {
            type: DataTypes.STRING(45)
        },
        accountPhone: {
            type: DataTypes.STRING(13),
            unique: true
        },
        accountZIP: {
            type: DataTypes.STRING(10)
        },
        accountVerifyFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        accountType: {
            type: DataTypes.ENUM,
            values: ["BROWSE", "ADVERTISE"],
            defaultValue: null
        },
        accountStatus: {
            type: DataTypes.STRING(20)
        },
        accountNewsletter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        accountEmailPreference: {
            type: DataTypes.STRING(45)
        },
        createdBy: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Account',
                key: 'accountId'
            }
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Account',
                key: 'accountId'
            }
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        allowNull: true
    });

    Account['createAccountStep1'] = async (bodyData) => {
        let accountData = await Account.create(bodyData)
        return accountData
    }

    return Account;
}