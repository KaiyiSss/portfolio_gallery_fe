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
					<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/ProductsListing")}>
						<span className="text-gray-700 text-sm" >
							Products
						</span>
					</button>
					<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
						onClick={()=>navigate("/VirtualVisit")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Virtual Visit
							</span>
						</button>
					<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>
						<span className="text-gray-700 text-sm" >
							Team Activities
						</span>
					</button>
					<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>
						<span className="text-gray-700 text-sm" >
							Roadmaps
						</span>
					</button>
					<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>
						<span className="text-gray-700 text-sm" >
							Techies
						</span>
					</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/sg85cogt_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="self-stretch bg-white pt-[72px] px-20">
					<div className="flex flex-col items-start self-stretch mb-5 gap-2.5">
						<span className="text-gray-900 text-[40px] font-bold" >
							Virtual Visit
						</span>
						<span className="text-gray-700 text-base" >
							Explore our regional hubs, discover active projects, and join scheduled walk-throughs.
						</span>
					</div>
					<div className="flex items-center self-stretch bg-[#FDFBF7] py-[11px] px-4 mb-12 rounded-[28px] border-2 border-solid border-[#FF6B4E]">
						<img
							src={"/assets/images/gakcurl0_expires_30_days.png"} 
							className="w-5 h-5 mr-3 rounded-[28px] object-fill"
						/>
						<span className="text-gray-700 text-[15px]" >
							Search regions, projects, or topics...
						</span>
						<div className="flex-1 self-stretch">
						</div>
						<div className="flex shrink-0 items-center mr-3 gap-2">
							<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-3 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-xs font-bold" >
									All
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-2 px-3 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#FF6B4E] text-xs font-bold" >
									North
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-teal-50 text-left py-2 px-3 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-teal-600 text-xs font-bold" >
									Central
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-orange-50 text-left py-2 px-3 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#F97316] text-xs font-bold" >
									South
								</span>
							</button>
						</div>
						<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 mr-3 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"/assets/images/o6ftbs76_expires_30_days.png"} 
								className="w-4 h-4 rounded-[20px] object-fill"
							/>
							<span className="text-gray-900 text-[13px] font-bold" >
								Oct 12
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-4 rounded-[20px] border-0"
							onClick={()=>alert("Search results would display here")}>
							<span className="text-white text-[13px] font-bold" >
								Search
							</span>
						</button>
					</div>
				</div>
				<div className="self-stretch pt-14 px-20">
					<div className="flex items-center self-stretch bg-[#F7F4EB] p-6 mb-10">
						<div className="flex flex-1 flex-col items-center gap-1">
							<span className="text-[#FF6B4E] text-[32px] font-bold" >
								3
							</span>
							<span className="text-gray-700 text-[13px] font-bold" >
								Total Regions
							</span>
						</div>
						<div className="flex flex-1 flex-col items-center gap-1">
							<span className="text-[#FF6B4E] text-[32px] font-bold" >
								39
							</span>
							<span className="text-gray-700 text-[13px] font-bold" >
								Active Projects
							</span>
						</div>
						<div className="flex flex-1 flex-col items-center gap-1">
							<span className="text-[#FF6B4E] text-[32px] font-bold" >
								8
							</span>
							<span className="text-gray-700 text-[13px] font-bold" >
								Upcoming Visits
							</span>
						</div>
						<div className="flex flex-1 flex-col items-center gap-1">
							<span className="text-[#FF6B4E] text-[32px] font-bold" >
								12
							</span>
							<span className="text-gray-700 text-[13px] font-bold" >
								Teams Participating
							</span>
						</div>
					</div>
					<div className="flex items-center self-stretch bg-[#FDFBF7] p-1 mb-10 gap-2 rounded-2xl border border-solid border-[#EDE9DF]">
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-3.5 rounded-xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[13px] font-bold" >
								Regions &amp; Visits
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-2 px-3.5 rounded-xl border border-solid border-[#EDE9DF]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-gray-700 text-[13px] font-bold" >
								Featured Projects
							</span>
						</button>
					</div>
					<div className="flex flex-col self-stretch mb-10 gap-4">
						<div className="flex flex-col items-start self-stretch gap-1.5">
							<span className="text-gray-900 text-2xl font-bold" >
								Explore Regions
							</span>
							<span className="text-gray-700 text-sm" >
								Browse regional hubs, active projects, and upcoming walk-throughs.
							</span>
						</div>
						<div className="flex items-center self-stretch">
							<div className="flex flex-1 flex-col items-start bg-white py-6 pr-6 mr-6 gap-4 rounded-2xl border border-solid border-[#EDE9DF]" 
								style={{
									boxShadow: "0px 4px 12px #1F293708"
								}}>
								<div className="flex items-center self-stretch ml-6 gap-4">
									<img
										src={"/assets/images/729d5eh2_expires_30_days.png"} 
										className="w-[72px] h-[72px] rounded-2xl object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-1.5">
										<div className="flex items-center self-stretch gap-[33px]">
											<span className="text-gray-900 text-xl font-bold" >
												North Region
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-1 px-2.5 rounded-xl">
												<span className="text-[#FF6B4E] text-[11px] font-bold" >
													12 active projects
												</span>
											</div>
										</div>
										<span className="text-gray-700 text-[13px]" >
											Scenic cold storage and main compute hub of sub-zero container networks
										</span>
										<button className="flex flex-col items-start bg-teal-50 text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-teal-600 text-xs font-bold" >
												3 upcoming visits
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch ml-6 gap-2.5">
									<span className="text-gray-400 text-xs font-bold" >
										Preview projects
									</span>
									<div className="flex items-center self-stretch gap-3">
										<img
											src={"/assets/images/0kvhivji_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product A
											</span>
											<span className="text-gray-700 text-xs" >
												Cluster monitoring engine
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-3">
										<img
											src={"/assets/images/pzanyusk_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product B
											</span>
											<span className="text-gray-700 text-xs" >
												Vector database &amp; embeddings
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-3">
										<img
											src={"/assets/images/d3exdydg_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product D
											</span>
											<span className="text-gray-700 text-xs" >
												Credential proxy pipeline
											</span>
										</div>
									</div>
								</div>
								<div className="flex items-center ml-6 gap-3">
									<span className="text-[#FF6B4E] text-[13px] font-bold" >
										Explore Region →
									</span>
									<img
										src={"/assets/images/rvg2fsls_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-6 pr-6 mr-[25px] gap-4 rounded-2xl border border-solid border-[#EDE9DF]" 
								style={{
									boxShadow: "0px 4px 12px #1F293708"
								}}>
								<div className="flex items-center self-stretch ml-6 gap-[15px]">
									<img
										src={"/assets/images/kxjp5pb5_expires_30_days.png"} 
										className="w-[72px] h-[72px] rounded-2xl object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-1.5">
										<div className="flex items-center self-stretch gap-5">
											<span className="text-gray-900 text-xl font-bold" >
												Central Region
											</span>
											<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
												<span className="text-teal-600 text-[11px] font-bold" >
													8 active projects
												</span>
											</div>
										</div>
										<span className="text-gray-700 text-[13px] w-[235px]" >
											The central nervous system hosting our primary transactional clusters
										</span>
										<button className="flex flex-col items-start bg-teal-50 text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-teal-600 text-xs font-bold" >
												2 upcoming visits
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch ml-6 gap-2.5">
									<span className="text-gray-400 text-xs font-bold" >
										Preview projects
									</span>
									<div className="flex items-center self-stretch gap-[11px]">
										<img
											src={"/assets/images/gfpbkbn7_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product C
											</span>
											<span className="text-gray-700 text-xs" >
												Collaborative canvas
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-[11px]">
										<img
											src={"/assets/images/6kwpdi4b_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product E
											</span>
											<span className="text-gray-700 text-xs" >
												Declarative UI styling
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-[11px]">
										<img
											src={"/assets/images/8t3i640p_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product F
											</span>
											<span className="text-gray-700 text-xs" >
												Streaming pub-sub router
											</span>
										</div>
									</div>
								</div>
								<div className="flex items-center ml-6 gap-3">
									<span className="text-teal-600 text-[13px] font-bold" >
										Explore Region →
									</span>
									<img
										src={"/assets/images/xizzvds4_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-6 pr-6 gap-4 rounded-2xl border border-solid border-[#EDE9DF]" 
								style={{
									boxShadow: "0px 4px 12px #1F293708"
								}}>
								<div className="flex items-center self-stretch ml-6 gap-[15px]">
									<img
										src={"/assets/images/5tef2yj4_expires_30_days.png"} 
										className="w-[72px] h-[72px] rounded-2xl object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-1.5">
										<div className="flex items-center self-stretch gap-[29px]">
											<span className="text-gray-900 text-xl font-bold" >
												South Region
											</span>
											<div className="flex flex-col shrink-0 items-start bg-orange-50 py-1 px-2.5 rounded-xl">
												<span className="text-[#F97316] text-[11px] font-bold" >
													14 active projects
												</span>
											</div>
										</div>
										<span className="text-gray-700 text-[13px] w-[257px]" >
											Solar-backed clean facility managing active distributed caching layers
										</span>
										<button className="flex flex-col items-start bg-orange-50 text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#F97316] text-xs font-bold" >
												3 upcoming visits
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch ml-6 gap-2.5">
									<span className="text-gray-400 text-xs font-bold" >
										Preview projects
									</span>
									<div className="flex items-center self-stretch gap-[11px]">
										<img
											src={"/assets/images/9lcw2ai2_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product G
											</span>
											<span className="text-gray-700 text-xs" >
												Local development sandbox
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-[11px]">
										<img
											src={"/assets/images/kwqtkshe_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product I
											</span>
											<span className="text-gray-700 text-xs" >
												Generative UI prototype
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-[11px]">
										<img
											src={"/assets/images/abfipua0_expires_30_days.png"} 
											className="w-11 h-11 rounded-xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Product J
											</span>
											<span className="text-gray-700 text-xs" >
												Load tester simulator
											</span>
										</div>
									</div>
								</div>
								<div className="flex items-center ml-6 gap-3">
									<span className="text-[#F97316] text-[13px] font-bold" >
										Explore Region →
									</span>
									<img
										src={"/assets/images/gddyarnl_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col self-stretch mb-20 gap-4">
						<div className="flex flex-col items-start self-stretch gap-1.5">
							<span className="text-gray-900 text-2xl font-bold" >
								Upcoming Visits
							</span>
							<span className="text-gray-700 text-sm" >
								A calendar-style view of scheduled walk-throughs across regions.
							</span>
						</div>
						<div className="flex flex-col self-stretch gap-3">
							<div className="flex items-center self-stretch bg-white p-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<div className="flex items-center self-stretch gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#FF6B4E] text-xs font-bold" >
												Oct 12 • 10:00 AM
											</span>
										</button>
										<span className="text-gray-900 text-[15px] font-bold" >
											North Region
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Cluster Sync Demo
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Zero-trust Proxy Review
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Maya Lin Arch Talk
											</span>
										</button>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={"/assets/images/xzllpz5w_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-xs" >
											18 registered
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[119px] gap-2">
									<button className="flex items-center self-stretch bg-teal-600 text-left py-2.5 px-[18px] gap-2.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											Join Visit
										</span>
										<img
											src={"/assets/images/cy9hpiht_expires_30_days.png"} 
											className="w-4 h-4 rounded-[10px] object-fill"
										/>
									</button>
									<span className="text-teal-600 text-xs font-bold ml-[26px]" >
										Add to Calendar
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch bg-white p-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<div className="flex items-center self-stretch gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#FF6B4E] text-xs font-bold" >
												Oct 15 • 02:30 PM
											</span>
										</button>
										<span className="text-gray-900 text-[15px] font-bold" >
											South Region
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Solar Caching Audit
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Latency Optimization
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Hardware Standup
											</span>
										</button>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={"/assets/images/uakkpn7s_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-xs" >
											12 registered
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[119px] gap-2">
									<button className="flex items-center self-stretch bg-teal-600 text-left py-2.5 px-[18px] gap-2.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											Join Visit
										</span>
										<img
											src={"/assets/images/bn12lnpa_expires_30_days.png"} 
											className="w-4 h-4 rounded-[10px] object-fill"
										/>
									</button>
									<span className="text-teal-600 text-xs font-bold ml-[26px]" >
										Add to Calendar
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch bg-white p-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<div className="flex items-center self-stretch gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#FF6B4E] text-xs font-bold" >
												Oct 22 • 11:00 AM
											</span>
										</button>
										<span className="text-gray-900 text-[15px] font-bold" >
											Central Region
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Master DB Failover
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Backup Pipelines
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Schema Review
											</span>
										</button>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={"/assets/images/tb4iige7_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-xs" >
											9 registered
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[119px] gap-2">
									<button className="flex items-center self-stretch bg-teal-600 text-left py-2.5 px-[18px] gap-2.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											Join Visit
										</span>
										<img
											src={"/assets/images/thafnhqc_expires_30_days.png"} 
											className="w-4 h-4 rounded-[10px] object-fill"
										/>
									</button>
									<span className="text-teal-600 text-xs font-bold ml-[26px]" >
										Add to Calendar
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch bg-white p-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<div className="flex items-center self-stretch gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#FF6B4E] text-xs font-bold" >
												Oct 29 • 09:30 AM
											</span>
										</button>
										<span className="text-gray-900 text-[15px] font-bold" >
											North Region
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Security Audit
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Credential Rotation
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Incident Response
											</span>
										</button>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={"/assets/images/tbn9u8jw_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-xs" >
											7 registered
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[119px] gap-2">
									<button className="flex items-center self-stretch bg-teal-600 text-left py-2.5 px-[18px] gap-2.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											Join Visit
										</span>
										<img
											src={"/assets/images/uhk2q67t_expires_30_days.png"} 
											className="w-4 h-4 rounded-[10px] object-fill"
										/>
									</button>
									<span className="text-teal-600 text-xs font-bold ml-[26px]" >
										Add to Calendar
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch bg-white p-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<div className="flex items-center self-stretch gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-1.5 px-2.5 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#FF6B4E] text-xs font-bold" >
												Nov 05 • 01:00 PM
											</span>
										</button>
										<span className="text-gray-900 text-[15px] font-bold" >
											South Region
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2">
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Load Testing
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Caching Strategy
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FDFBF7] text-left py-1.5 px-2.5 rounded-2xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs" >
												Hardware Refresh
											</span>
										</button>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={"/assets/images/v4me6j4e_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-xs" >
											15 registered
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[119px] gap-2">
									<button className="flex items-center self-stretch bg-teal-600 text-left py-2.5 px-[18px] gap-2.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											Join Visit
										</span>
										<img
											src={"/assets/images/u281v5qg_expires_30_days.png"} 
											className="w-4 h-4 rounded-[10px] object-fill"
										/>
									</button>
									<span className="text-teal-600 text-xs font-bold ml-[26px]" >
										Add to Calendar
									</span>
								</div>
							</div>
						</div>
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
									src={"/assets/images/0kigdrfi_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/p7wrzwnb_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ae4jtj6r_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/cs4zgxna_expires_30_days.png"} 
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