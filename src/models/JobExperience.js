import mongoose from 'mongoose';

export const JobExperience = mongoose.model('JobExperience', {
    jobName: String,
    companyName: String,
    dateFrom: String,
    dateTo: String,
    jobAccount: String,
    jobDescription: String
});