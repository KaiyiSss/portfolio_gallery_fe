import React from "react";
import { useNavigate } from "react-router-dom";
export default () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#FDFBF7] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[27px] px-20">
					<div className="flex shrink-0 items-center gap-2.5">
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[3px] px-[13px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl border-0"
						onClick={()=>navigate("/")}>
							<span className="text-white text-lg font-bold" >
								F
							</span>
						</button>
						<span className="text-gray-900 text-xl" >
							Foundations Gallery
						</span>
					</div>
					<div className="flex shrink-0 items-center gap-3">
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/ProductsListing")}>`n<span className="text-gray-700 text-sm" >`nProducts`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Virtual Visit
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>`n<span className="text-gray-700 text-sm" >`nTeam Activities`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>`n<span className="text-gray-700 text-sm" >`nRoadmaps`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>`n<span className="text-gray-700 text-sm" >`nTechies`n</span>`n</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/7sqkizh2_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-4">
					<div className="flex shrink-0 items-center ml-20 mr-2 gap-[9px]">
						<span className="text-gray-700 text-[13px]" >
							Virtual Visit
						</span>
						<img
							src={"/assets/images/yvz813fq_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						Admin Panel
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white pt-12 pl-20">
					<div className="flex items-center mb-4 gap-[21px]">
						<span className="text-gray-900 text-[40px] font-bold" >
							Manage Regional Topics
						</span>
						<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-[3px] px-3 rounded-xl">
							<span className="text-[#FF6B4E] text-xs font-bold" >
								Admin/Editor Only
							</span>
						</div>
					</div>
					<span className="text-gray-700 text-base w-[665px] mb-8" >
						Add, configure, and publish telemetry topics or scheduled walkthrough dates across server regions. Restricted to central infrastructure architects and team leads.
					</span>
				</div>
				<div className="flex items-start self-stretch pt-10 pb-20 px-20 gap-8">
					<div className="flex flex-1 items-start gap-6">
						<div className="flex flex-1 flex-col bg-white p-5 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
							<div className="flex justify-between items-center self-stretch">
								<span className="text-gray-900 text-lg font-bold" >
									North Region
								</span>
								<img
									src={"/assets/images/cd436aiy_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
							<div className="flex flex-col self-stretch gap-3">
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative ml-4">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												ScyllaDB Telemetry
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/1rs7oqme_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/ydrn6nup_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs w-[193px] ml-4" >
										Monitoring rapid hot-node indexing cluster states under low temps.
									</span>
									<div className="flex justify-between items-center self-stretch ml-4">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Telemetry
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 12
										</span>
									</div>
									<div className="flex items-center self-stretch ml-4 gap-2">
										<img
											src={"/assets/images/o5thjw4z_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-teal-600 text-[11px] font-bold" >
											Published
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative ml-4">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Cold Storage Audit
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/ibs1rvu6_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/m4c3ulcr_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs w-[191px] ml-4" >
										Sub-zero backup routines, regional replication sync latency results.
									</span>
									<div className="flex justify-between items-center self-stretch ml-4">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Core Infra
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 15
										</span>
									</div>
									<div className="flex items-center self-stretch ml-4 gap-2">
										<img
											src={"/assets/images/2zuq8nif_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-teal-600 text-[11px] font-bold" >
											Published
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative ml-4">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Proxy Pipeline Tests
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/zwbzg1uu_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/x3842tkk_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs w-[161px] ml-4" >
										Zero-trust verification proxy performance on local servers.
									</span>
									<div className="flex justify-between items-center self-stretch ml-4">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Security
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 22
										</span>
									</div>
									<div className="flex items-center self-stretch ml-4 gap-2">
										<img
											src={"/assets/images/el60xgyk_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-gray-700 text-[11px] font-bold" >
											Hidden
										</span>
									</div>
								</div>
							</div>
							<button className="flex justify-center items-center self-stretch bg-white text-left py-3 gap-2 rounded-lg border border-solid border-[#EDE9DF]"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"/assets/images/8teki67r_expires_30_days.png"} 
									className="w-3.5 h-3.5 rounded-lg object-fill"
								/>
								<span className="text-gray-700 text-[13px] font-bold" >
									Add New Topic
								</span>
							</button>
						</div>
						<div className="flex flex-1 flex-col bg-white p-5 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
							<div className="flex justify-between items-center self-stretch">
								<span className="text-gray-900 text-lg font-bold" >
									Central Region
								</span>
								<img
									src={"/assets/images/2c0baizp_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
							<div className="flex flex-col self-stretch gap-3">
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative ml-4">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Kafka Auto-scaling
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/ge4hgctm_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/y3ehhsmd_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs w-[186px] ml-4" >
										Real-time stream router threshold test cases and deployment steps.
									</span>
									<div className="flex justify-between items-center self-stretch ml-4">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Core Infra
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 10
										</span>
									</div>
									<div className="flex items-center self-stretch ml-4 gap-2">
										<img
											src={"/assets/images/u6t1z98f_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-teal-600 text-[11px] font-bold" >
											Published
										</span>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-[#FDFBF7] p-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Alpha Prototype Sync
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/m88kxvpq_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/ba9hcmfo_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs" >
										Connecting local sandbox prototype with main central DB cluster.
									</span>
									<div className="flex justify-between items-center self-stretch">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Productivity
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 18
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<img
											src={"/assets/images/l406llsu_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-teal-600 text-[11px] font-bold" >
											Published
										</span>
									</div>
								</div>
							</div>
							<button className="flex justify-center items-center self-stretch bg-white text-left py-3 gap-2 rounded-lg border border-solid border-[#EDE9DF]"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"/assets/images/8objd39o_expires_30_days.png"} 
									className="w-3.5 h-3.5 rounded-lg object-fill"
								/>
								<span className="text-gray-700 text-[13px] font-bold" >
									Add New Topic
								</span>
							</button>
						</div>
						<div className="flex flex-1 flex-col bg-white p-5 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
							<div className="flex justify-between items-center self-stretch">
								<span className="text-gray-900 text-lg font-bold" >
									South Region
								</span>
								<img
									src={"/assets/images/nziiuic4_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
							<div className="flex flex-col self-stretch gap-3">
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative ml-4">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Solar Caching
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/x7g6l231_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/pnujd7d1_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs w-[193px] ml-4" >
										Caching layer runtimes backing the sustainable Southern solar grids.
									</span>
									<div className="flex justify-between items-center self-stretch ml-4">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Core Infra
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 08
										</span>
									</div>
									<div className="flex items-center self-stretch ml-4 gap-2">
										<img
											src={"/assets/images/6hh3gzms_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-teal-600 text-[11px] font-bold" >
											Published
										</span>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-[#FDFBF7] p-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Vulnerability Scans
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/h0nm03cj_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/0sfu9g81_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs" >
										Telemetry security profiles and patch routines review.
									</span>
									<div className="flex justify-between items-center self-stretch">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Security
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 14
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<img
											src={"/assets/images/t195st5v_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-gray-700 text-[11px] font-bold" >
											Hidden
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
									<div className="flex flex-col items-start self-stretch relative ml-4">
										<div className="flex flex-col items-start self-stretch">
											<span className="text-gray-900 text-sm font-bold" >
												Hardware Showcase
											</span>
										</div>
										<div className="flex flex-col items-center absolute top-0 right-[-8px]">
											<div className="flex items-center gap-2">
												<img
													src={"/assets/images/q1wm8gvr_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
												<img
													src={"/assets/images/ucibtuv5_expires_30_days.png"} 
													className="w-3.5 h-3.5 object-fill"
												/>
											</div>
										</div>
									</div>
									<span className="text-gray-700 text-xs w-[149px] ml-4" >
										On-site GPU rack telemetry benchmarks presentation.
									</span>
									<div className="flex justify-between items-center self-stretch ml-4">
										<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-2 rounded">
											<span className="text-teal-600 text-[11px] font-bold" >
												Telemetry
											</span>
										</div>
										<span className="text-gray-400 text-[11px]" >
											Oct 24
										</span>
									</div>
									<div className="flex items-center self-stretch ml-4 gap-2">
										<img
											src={"/assets/images/8sfczlfx_expires_30_days.png"} 
											className="w-[34px] h-[18px] rounded-[9px] object-fill"
										/>
										<span className="text-teal-600 text-[11px] font-bold" >
											Published
										</span>
									</div>
								</div>
							</div>
							<button className="flex justify-center items-center self-stretch bg-white text-left py-3 gap-2 rounded-lg border border-solid border-[#EDE9DF]"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"/assets/images/8eh8q0ck_expires_30_days.png"} 
									className="w-3.5 h-3.5 rounded-lg object-fill"
								/>
								<span className="text-gray-700 text-[13px] font-bold" >
									Add New Topic
								</span>
							</button>
						</div>
					</div>
					<div className="flex flex-col items-start bg-white w-[360px] p-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-lg font-bold" >
							Upcoming Visits
						</span>
						<div className="flex flex-col self-stretch gap-3">
							<div className="flex flex-col items-start self-stretch bg-[#FFF0EC] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#FF6B4E]">
								<span className="text-[#FF6B4E] text-xs font-bold" >
									Oct 12, 10:00 AM
								</span>
								<span className="text-gray-900 text-[15px] font-bold" >
									North Region
								</span>
								<span className="text-gray-700 text-[13px]" >
									3 Topics Scheduled
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-400 text-xs font-bold" >
									Oct 15, 02:30 PM
								</span>
								<span className="text-gray-900 text-[15px] font-bold" >
									South Region
								</span>
								<span className="text-gray-700 text-[13px]" >
									3 Topics Scheduled
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-400 text-xs font-bold" >
									Oct 22, 11:00 AM
								</span>
								<span className="text-gray-900 text-[15px] font-bold" >
									Central Region
								</span>
								<span className="text-gray-700 text-[13px]" >
									2 Topics Scheduled
								</span>
							</div>
						</div>
						<button className="flex justify-center items-center self-stretch bg-[#FF6B4E] text-left py-3 gap-2 rounded-lg border-0"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"/assets/images/ze3p74ib_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
							<span className="text-white text-[13px] font-bold" >
								Schedule New Visit
							</span>
						</button>
					</div>
				</div>
				<div className="self-stretch bg-gray-900 pt-20 px-20">
					<div className="flex justify-between items-start self-stretch mb-12">
						<div className="flex flex-col items-start w-80 pr-[29px] gap-4">
							<div className="flex items-center gap-2.5">
								<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-0.5 px-2.5 rounded-md">
									<span className="text-white text-sm font-bold" >
										F
									</span>
								</div>
								<span className="text-white text-lg" >
									Foundations Gallery
								</span>
							</div>
							<span className="text-gray-400 text-sm w-[291px]" >
								An active internal showcase of the products, missions, activities, and roadmaps driving our modern technology stack.
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-3">
							<span className="text-white text-sm font-bold mr-[52px]" >
								Showcase
							</span>
							<span className="text-gray-400 text-sm mr-[54px]" >
								All Products
							</span>
							<span className="text-gray-400 text-sm mr-[29px]" >
								Virtual Visit Map
							</span>
							<span className="text-gray-400 text-sm mr-[52px]" >
								Activity Blog
							</span>
							<span className="text-gray-400 text-sm" >
								Universal Roadmaps
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-3">
							<span className="text-white text-sm font-bold" >
								Organization
							</span>
							<span className="text-gray-400 text-sm" >
								The Core Team
							</span>
							<span className="text-gray-400 text-sm mr-[11px]" >
								Techies Forum
							</span>
							<span className="text-gray-400 text-sm mr-[15px]" >
								Global Offices
							</span>
							<span className="text-gray-400 text-sm mr-[15px]" >
								Contributions
							</span>
						</div>
						<div className="flex flex-col items-start w-[280px] pr-[11px] gap-4">
							<span className="text-white text-sm font-bold" >
								Connect with us
							</span>
							<span className="text-gray-400 text-sm w-[269px]" >
								Have questions or want to host a roadmap presentation? Get in touch at foundations@gallery.internal
							</span>
							<div className="flex items-center gap-3">
								<img
									src={"/assets/images/g4upomxi_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/iuyuadp9_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/lwbaugmf_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/td10wab3_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="self-stretch bg-gray-700 h-[1px] mb-[47px]">
					</div>
					<div className="flex justify-between items-center self-stretch mb-10">
						<span className="text-gray-400 text-[13px]" >
							© 2025 Foundations Gallery. Internal Product Showcase.
						</span>
						<span className="text-gray-400 text-[13px]" >
							Privacy Policy • Terms of Service
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}