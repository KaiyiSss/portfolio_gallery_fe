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
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
						onClick={()=>navigate("/ProductsListing")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Products
							</span>
						</button>
					<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>
						<span className="text-gray-700 text-sm" >
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
							src={"/assets/images/r0k6c3dd_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white py-[72px] pr-20 gap-6">
					<div className="flex flex-col items-start self-stretch ml-20 gap-3">
						<span className="text-gray-900 text-[40px] font-bold" >
							Explore Our Products
						</span>
						<span className="text-gray-700 text-base w-[610px]" >
							Foundations Gallery hosts the central index of internal projects. Review capabilities, consult active roadmaps, and connect with team owners.
						</span>
					</div>
					<div className="flex items-center bg-[#FDFBF7] py-2 px-5 ml-20 rounded-[28px] border-2 border-solid border-[#FF6B4E]">
						<img
							src={"/assets/images/pzqtdopa_expires_30_days.png"} 
							className="w-5 h-5 mr-3 rounded-[28px] object-fill"
						/>
						<span className="text-gray-700 text-[15px] w-[329px] mr-[90px]" >
							Search 10 core products (e.g. databases, design systems)...
						</span>
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-4 rounded-[20px] border-0"
						onClick={()=>alert("Search results would display here")}>
							<span className="text-white text-[13px] font-bold" >
								Search
							</span>
						</button>
					</div>
				</div>
				<div className="flex flex-col self-stretch py-16 px-20 gap-6">
					<div className="flex items-center self-stretch gap-[25px]">
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/1gzzxfod_expires_30_days.png"} 
								className="w-[362px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product A
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-[7px] rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Core Infrastructure
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[329px]" >
									Enterprise scale cluster monitoring engine designed for rapid hot-node indexing.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
							<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/2kcuyxp5_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/me0j7yat_expires_30_days.png"} 
								className="w-[362px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product B
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-[7px] rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											AI &amp; Search
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[322px]" >
									Next-gen vector database with conversational API and robust embedding cache.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
							<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/fmnxav0i_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/f82a2znn_expires_30_days.png"} 
								className="w-[362px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product C
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2 rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Productivity
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px]" >
									Collaborative canvas designed for spatial team planning and wireframing.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
							<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/s4b0ifew_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch gap-[25px]">
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/9h28awjj_expires_30_days.png"} 
								className="w-[362px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product D
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-[7px] rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Core Infrastructure
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[344px]" >
									Secure proxy pipeline wrapping credential flows for cloud-native databases.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/5iql8g0g_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/ayg1eahu_expires_30_days.png"} 
								className="w-[362px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product E
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-[7px] rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Design &amp; UX
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[337px]" >
									Declarative UI styling toolkit optimized for heavy dynamic visualizations.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/1lr597s6_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/7hc18yao_expires_30_days.png"} 
								className="w-[362px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product F
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2 rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Core Infrastructure
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[340px]" >
									Low-latency streaming pub-sub router supporting billion-event bursts.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/jmvnhzce_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch gap-6">
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/4ufmf76b_expires_30_days.png"} 
								className="w-[254px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product G
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2 rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Productivity
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[221px]" >
									Local development virtual sandbox isolating network requests flawlessly.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/49znzlay_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/csljawqg_expires_30_days.png"} 
								className="w-[254px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product H
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2 rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Security
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[207px]" >
									Automated vulnerability scanner generating inline pull request fixes.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/bj29qjgo_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/mgv04ru2_expires_30_days.png"} 
								className="w-[254px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product I
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2 rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											Design &amp; UX
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px] w-[239px]" >
									Generative UI prototype playground that links design directly to deploy.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/tfddjdec_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}} onClick={()=>navigate("/ProductDetail")} style={{ cursor: "pointer" }}>
							<img
								src={"/assets/images/okgpe6s3_expires_30_days.png"} 
								className="w-[254px] h-40 rounded-lg object-fill"
							/>
							<div className="flex flex-col self-stretch mx-6 gap-2">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-lg font-bold" >
										Product J
									</span>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2 rounded">
										<span className="text-teal-600 text-[11px] font-bold" >
											AI &amp; Search
										</span>
									</div>
								</div>
								<span className="text-gray-700 text-[13px]" >
									Deterministic database load tester simulating aggressive client connections.
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch mx-6">
								<button onClick={()=>navigate("/RoadmapDetail")} className="text-[#FF6B4E] text-[13px] font-bold underline" style={{ cursor: "pointer" }} >View Roadmap</button>
								<img
									src={"/assets/images/kujtwyqi_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
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
							<span className="text-white text-sm font-bold mr-[53px]" >
								Showcase
							</span>
							<span className="text-gray-400 text-sm mr-[55px]" >
								All Products
							</span>
							<span className="text-gray-400 text-sm mr-[30px]" >
								Virtual Visit Map
							</span>
							<span className="text-gray-400 text-sm mr-[53px]" >
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
							<span className="text-gray-400 text-sm mr-3" >
								Techies Forum
							</span>
							<span className="text-gray-400 text-sm mr-4" >
								Global Offices
							</span>
							<span className="text-gray-400 text-sm mr-4" >
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
									src={"/assets/images/h0j6vtz4_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/s3vvpjsu_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/x0ol7guh_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ot5dv4dp_expires_30_days.png"} 
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