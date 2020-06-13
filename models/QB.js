const mongoose = require('mongoose'),
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
        touchdowns: {
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
        }

    });

const Model = mongoose.model('Quarterbacks', QB_Schema);

module.exports = Model;