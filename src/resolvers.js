import { JobExperience } from './models/JobExperience';

export const resolvers = {
    Query: {
        jobExperiences: () => JobExperience.find()
    },
    Mutation: {
        createJobExperience: async (_, {
            jobName,
            companyName,
            dateFrom,
            dateTo,
            jobAccount,
            jobDescription
        }) => {
            try {
                const jobExperience = new JobExperience({
                    jobName,
                    companyName,
                    dateFrom,
                    dateTo,
                    jobAccount,
                    jobDescription
                });
            
                await jobExperience.save();
                return jobExperience;
            } catch (error) {
                console.log(error);
            }
        }
    }
}


// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));