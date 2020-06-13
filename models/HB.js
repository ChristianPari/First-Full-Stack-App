const mongoose = require('mongoose'),
    HB_Schema = mongoose.Schema({
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
        rushing_yards: {
            type: Number,
            required: true
        },
        touchdowns: {
            type: Number,
            required: true
        },
        rush_attempts: {
            type: Number,
            required: true
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

const Model = mongoose.model('Halfbacks', HB_Schema);

module.exports = Model;