import jwt from "jsonwebtoken";

export default function (sequelize, DataTypes) {
    const Listings = sequelize.define("Listings", {
        listingsId: {
            type: DataTypes.INTEGER
            ,primaryKey: true
            ,autoIncrement: true
        },
        listingsType: {
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsCategory: {
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsSubCategory: {
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsUnpublish:{
            type: DataTypes.DATE
            ,allowNull: true
            ,defaultValue: null
        },
        listingsCity:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsState:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsCountry:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsDescription:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsYearFrom:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsYearTo:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsEnquiryEmail:{
            type: DataTypes.STRING
            ,allowNull: true
            ,defaultValue: null
        },
        listingsStatus:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsCompany:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsAccount:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        createTime:{
            type: DataTypes.DATE
            ,allowNull: false
            ,defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            
        },
        updateTime:{
            type: DataTypes.DATE
            ,allowNull: true
            ,defaultValue: null
        },
        createdBy:{
            type: DataTypes.INTEGER
            ,allowNull: false
        },
        updatedBy:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        }
    }, 
    {
        indexes: [
        {
            unique: true
            ,name:'listingsId_UNIQUE'
            ,fields: ['listingsId']
        },
        {
            unique: false
            ,name: 'listingsCompany_FK_idx'
            ,fields: ['listingsCompany']
        },
        {
            unique: false
            ,name: 'listingsCategory_FK_idx'
            ,fields: ['listingsSubCategory']
        },
        {
            unique: false
            ,name: 'listingsAccount_FK_idx'
            ,fields: ['listingsAccount']
        }
    ],
    timestamps: false
    ,charset: 'utf8'
    ,collate: 'utf8_general_ci'
    });

    Listings['createListingStep1'] = async (bodyData) => {
        let listingData = await Listings.create(bodyData)
        return listingData
    }
 
    
    return Listings;
}

