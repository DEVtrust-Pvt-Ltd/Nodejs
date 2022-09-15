import jwt from "jsonwebtoken";

export default function (sequelize, DataTypes) {
    const ListingAircraft = sequelize.define("ListingAircraft", {
        listingsId: {
            type: DataTypes.INTEGER
            ,primaryKey: true
            ,autoIncrement: true
            ,allowNull: false
        },
        listingsAircraftType: {
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsSize: {
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsMake: {
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsModel:{
            type: DataTypes.DATE
            ,allowNull: true
            ,defaultValue: null
        },
        listingsSerial:{
            type: DataTypes.STRING(45)
            ,allowNull: true
            ,defaultValue: null
        },
        listingsRegistration:{
            type: DataTypes.STRING(45)
            ,allowNull: true
            ,defaultValue: null
        },
        listingsYear:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsPrice:{
            type: DataTypes.FLOAT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsCurrency:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsNumberPax:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsMaintProgram:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsTotalTime:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsLandings:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsEngineMfg:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsEngineMaintPlan:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsEngineOn:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsAPU:{
            type: DataTypes.STRING(45)
            ,allowNull: true
            ,defaultValue: null
        },
        listingsAPUMaintPlan:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsTotalAPUTime:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsPropeller:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsMaintDesc:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsAvionicsDesc:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsAddnInfoDesc:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsWeightsDesc:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsExteriorCond:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsExteriorCond:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsPaintMonth:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsPaintYear:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listigsExteriorDetails:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsInteriorCond:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsRefurbishedFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsRefurbishedPart:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsRefurbishedMonth:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsRefurbishedYear:{
            type: DataTypes.INTEGER
            ,allowNull: true
            ,defaultValue: null
        },
        listingsInteriorDetails:{
            type: DataTypes.TEXT
            ,allowNull: true
            ,defaultValue: null
        },
        listingsSaleBuyFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsLeaseFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsTradeFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsAuctionFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsOfferFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsCallFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsBidFlag:{
            type: DataTypes.BOOLEAN
            ,allowNull: true
            ,defaultValue: null
        },
        listingsDealFlag:{
            type: DataTypes.BOOLEAN
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
        }],
    timestamps: false
    ,charset: 'utf8'
    ,collate: 'utf8_general_ci'
    });

    ListingAircraft['createListingAircraftStep1'] = async (bodyData) => {
        let listingAircraftData = await ListingAircraft.create(bodyData)
        return listingAircraftData
    }
 
    
    return ListingAircraft;
}

