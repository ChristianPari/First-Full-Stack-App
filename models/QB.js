const validator = require('validator'),
    mongoose = require('mongoose'),
    QB_Schema = mongoose.Schema({
        name: {
            first: {
                type: String,
                required: true,
                trim: true
            },
            last: {
                type: String,
                required: true,
                trim: true
            }
        },
        passing_yards: {
            type: Number,
            required: true
        },
        passing_tds: {
            type: Number,
            required: true
        },
        record: {
            wins: {
                type: Number,
                required: true
            },
            losses: {
                type: Number,
                required: true
            }
        },
        teams: {
            cur_team: {
                type: String,
                trim: true
            },
            prev_teams: {
                type: [String],
                trim: true
            }
        },
        jerseys: {
            cur_jersey: {
                type: Number
            },
            prev_jerseys: {
                type: [Number]
            }
        }

    });

const Model = mongoose.model('Quarterbacks', QB_Schema);

module.exports = Model;