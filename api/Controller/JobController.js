import JobModel from "../Model/JobModel";

const JobController = {
    registerJob: async (req, res) => {
        const {job, earning, location, companyName} = req.body;
        const newJob = await JobModel.create({
                job: job,
                earning: earning,
                location: location,
                companyName: companyName
            }
        )
        res.send({
            message: "Create success",
            data: newJob
        })
    }
}
export default JobController