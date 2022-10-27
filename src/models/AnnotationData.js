const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: false,
        },
        priority: {
            type: Boolean,
            required: false,
        },
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Annotations', AnnotationDataSchema);