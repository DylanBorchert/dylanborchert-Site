import axios from "axios";


export async function getCommitData () {
	return axios
		.get(`https://api.github.com/repos/dborc610/dylanborchert-Site/commits`)
		.then((response) => {
			console.log(response);
			const commitSha = response.data[0]?.sha;
			const commitMessage = response.data[0]?.commit.message;
			let commitTime = response.data[0]?.commit.committer.date
				.replace("T", " at ")
				.replace("Z", " ");

			let splittedTime = commitTime.split(" at ");
			let time = splittedTime[1].split(":");
			let hour = parseInt(time[0]);
			time[0] = hour - 7 < 0 ? hour + 17 : hour - 7;
			time = time.join(":");
			splittedTime[1] = time;
			commitTime = splittedTime.join(" at ");
			return [commitSha, commitTime, commitMessage];
		}).catch((error) => {
            return ["", "", ""];
        });
};

export default { getCommitData };
