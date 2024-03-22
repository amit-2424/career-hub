import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-6xl">Featured Jobs: {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, similique?</p>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.map(job=><Jobs key={job.id} job={job}></Jobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;