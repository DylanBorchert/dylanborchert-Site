import { useRouter } from "next/router";
import contentProvider from '../../modules/ContentProvider.js'
import ContentProcessor from "../../components/ContentProcessor.jsx";
import { useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";

export default function Page({ project }: any) {

	return (
		<>
			<Navbar />
			<div className="min-h-[calc(100dvh-48px)] bg-background-black">
				<div className="text-white w-full">


					<ContentProcessor content={project[0].data[0].attributes.content} />

				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context: any) {
	const { UID } = context.query;
	return {
		props: {
			project: await contentProvider.getProject(UID),
		}, // will be passed to the page component as props
	};
}
