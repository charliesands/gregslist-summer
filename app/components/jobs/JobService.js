import Job from "../../models/Jobs.js"

//@ts-ignore
const jobsApi = axios.create({
  baseURL: 'http://localhost:3000/api/jobs',
  timeout: 3000
})


export default class JobService {
  constructor() {

  }
  getJobs(draw) {
    jobsApi()
      .then(res => {
        let jobs = res.data.map(rawJob => {
          return new Job(rawJob)
        })
        draw(jobs)
      })
  }

  addJob(formData, draw) {
    let newJob = new Job({
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value,
    })
    jobsApi.post('', newJob)
      .then(res => {
        this.getJobs(draw)
      })

  }
  deleteJob(jobId, draw) {
    jobsApi.delete(jobId)
      .then(res => {
        this.getJobs(draw)

      })
  }
  // bid(jobId, update, draw) {
  //   jobsApi.put(jobId, update)
  //     .then(res => {
  //       console.log(res)
  //       this.getJobs(draw)
  //     })
  // }
}
