import { useRouter } from "next/router";
import contentProvider from '../../modules/ContentProvider.js'
import ContentProcessor from "../../components/ContentProcessor.jsx"
import { useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page({ blog }: any) {

	function CMS_Handler() {
		if (blog == null) {
			toast.error('Error Loading Content', {
				toastId: "error-loading-content",
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			return null
		} else {
			return <ContentProcessor content={blog[0].data[0].attributes.content} />
		}
	}


	return (
		<>
			<Navbar />
			<div className="min-h-[calc(100dvh-48px)] bg-background-black">
				<div className="text-white w-full">
					{CMS_Handler()}
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}

export async function getServerSideProps(context: any) {
	const { UID } = context.query;
	return {
		props: {
			blog: await contentProvider.getBlog(UID),
		}, // will be passed to the page component as props
	};
}