import {React , useState, useEffect} from "react";
import axios from "axios";

const Footer = (props) => {

    const [commit, setCommit] = useState({ sha: "", time: "" });

    useEffect(() => {
        axios
        .get("https://api.github.com/repos/dborc610/dylanborchert-Site/commits")
        .then((response) => {
            const commitSha = response.data[0].sha;
            const commitTime = response.data[0].commit.committer.date
            .replace("T", " at ")
            .replace("Z", " ");
            setCommit({
            sha: commitSha,
            time: commitTime,
            });
        })
        .catch((error) => {
            console.log(error);
        });
        console.log(commit);
    }, []);


    return (
        <div className="top-0 h-[50px] flex w-full justify-between">
            <p className="text-gray-200 mix-blend-difference my-auto pl-3 font-semibold">
                dylan borchert © {new Date().getFullYear()}
            </p>
            <p className="my-auto pr-3 font-light text-sm text-gray-200 mix-blend-difference">
                last updated on {commit.time} 
                <a className="underline" href={`https://github.com/dborc610/dylanborchert-Site/commit/${commit.sha}`}>{`[commit ${commit.sha.substring(0,7)}]`}</a>
            </p>
        </div>
    )

}

export default Footer;