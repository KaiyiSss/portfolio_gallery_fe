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
							src={"/assets/images/9mvikfu9_expires_30_days.png"} 
							className="w-3.5 h-3.5 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="self-stretch bg-white pt-[72px] px-20">
					<div className="flex flex-col items-start self-stretch mb-6 gap-2.5">
						<span className="text-gray-900 text-[40px] font-bold" >
							Virtual Visit
						</span>
						<span className="text-gray-700 text-base" >
							Explore our regional hubs, discover active projects, and join scheduled walk-throughs.
						</span>
					</div>
					<div className="flex items-center self-stretch bg-[#FDFBF7] py-[11px] px-4 mb-6 rounded-[28px] border-2 border-solid border-[#FF6B4E]">
						<img
							src={"/assets/images/qxw3abkz_expires_30_days.png"} 
							className="w-[18px] h-[18px] mr-3 rounded-[28px] object-fill"
						/>
						<span className="text-gray-700 text-[15px]" >
							Search regions, projects, or topics...
						</span>
						<div className="flex-1 self-stretch">
						</div>
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-4 rounded-[20px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[13px] font-bold" >
								Search
							</span>
						</button>
					</div>
					<div className="flex items-center self-stretch bg-[#FDFBF7] p-1 mb-12 gap-2 rounded-2xl border border-solid border-[#EDE9DF]">
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-2 px-3.5 rounded-xl border border-solid border-[#EDE9DF]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-gray-700 text-[13px] font-bold" >
								Regions &amp; Visits
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-3.5 rounded-xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[13px] font-bold" >
								Featured Projects
							</span>
						</button>
					</div>
				</div>
				<div className="flex items-start self-stretch pt-6">
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 ml-20 mr-3 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-gray-400 text-[13px] mr-[11px]" >
							Region:
						</span>
						<span className="text-gray-900 text-[13px] font-bold mr-[9px]" >
							All Regions
						</span>
						<img
							src={"/assets/images/2vuuht60_expires_30_days.png"} 
							className="w-3 h-3 rounded-[20px] object-fill"
						/>
					</button>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mr-3 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-gray-400 text-[13px] mr-[11px]" >
							Status:
						</span>
						<span className="text-gray-900 text-[13px] font-bold mr-[9px]" >
							All Statuses
						</span>
						<img
							src={"/assets/images/d51qy6mk_expires_30_days.png"} 
							className="w-3 h-3 rounded-[20px] object-fill"
						/>
					</button>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mr-3 gap-2.5 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-gray-400 text-[13px]" >
							Team:
						</span>
						<span className="text-gray-900 text-[13px] font-bold" >
							All Teams
						</span>
						<img
							src={"/assets/images/y8o2qoap_expires_30_days.png"} 
							className="w-3 h-3 rounded-[20px] object-fill"
						/>
					</button>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-[11px] rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-gray-400 text-[13px]" >
							Sort by:
						</span>
						<span className="text-gray-900 text-[13px] font-bold" >
							Relevance
						</span>
						<img
							src={"/assets/images/7nhdi2yv_expires_30_days.png"} 
							className="w-3 h-3 rounded-[20px] object-fill"
						/>
					</button>
				</div>
				<div className="self-stretch pt-8 px-20">
					<div className="flex items-center self-stretch mb-6">
						<div className="flex flex-1 flex-col items-center bg-white py-6 mr-6 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/ot2bij8x_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-1 px-2.5 rounded-xl">
										<span className="text-[#FF6B4E] text-[11px] font-bold" >
											North Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Active
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Helios Grid Node Sync
								</span>
								<span className="text-gray-700 text-[13px] w-[313px]" >
									Local development virtual sandbox isolating complex network sync requests seamlessly.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/pujiw8wm_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Devon Lane
									</span>
								</div>
								<img
									src={"/assets/images/fbcurrls_expires_30_days.png"} 
									className="w-[107px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product A
								</span>
								<img
									src={"/assets/images/o3k5hkps_expires_30_days.png"} 
									className="w-[13px] h-3.5 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[25px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/0ogoszii_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Central Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Active
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Vector Cache Accelerator
								</span>
								<span className="text-gray-700 text-[13px] w-[296px]" >
									Low-latency database cluster caching specifically engineered for rapid vector indexing.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/c7gzmn8o_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Arlene McCoy
									</span>
								</div>
								<img
									src={"/assets/images/sz0hk91r_expires_30_days.png"} 
									className="w-[107px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product B
								</span>
								<img
									src={"/assets/images/shqoqcyr_expires_30_days.png"} 
									className="w-[13px] h-3.5 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/vckdafxf_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-orange-50 py-1 px-2.5 rounded-xl">
										<span className="text-[#F97316] text-[11px] font-bold" >
											South Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Active
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Quantum UI Canvas
								</span>
								<span className="text-gray-700 text-[13px]" >
									Generative canvas with real-time feedback loops connecting designs directly to codebase deploys.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/x1e1xh20_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Theresa Webb
									</span>
								</div>
								<img
									src={"/assets/images/5qefkw64_expires_30_days.png"} 
									className="w-[108px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product C
								</span>
								<img
									src={"/assets/images/dijgyu7a_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch mb-6">
						<div className="flex flex-1 flex-col items-center bg-white py-6 mr-6 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/bsas9x3f_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-1 px-2.5 rounded-xl">
										<span className="text-[#FF6B4E] text-[11px] font-bold" >
											North Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-amber-100 py-1 px-2.5 rounded-xl">
										<span className="text-amber-600 text-[11px] font-bold" >
											Paused
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Sentry Gateway Proxy
								</span>
								<span className="text-gray-700 text-[13px] w-[333px]" >
									Deterministic proxy gateway testing connection bounds against hostile client requests.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/flkcfqg1_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Cody Fisher
									</span>
								</div>
								<img
									src={"/assets/images/jg0xuvdn_expires_30_days.png"} 
									className="w-[107px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product D
								</span>
								<img
									src={"/assets/images/czivhk7j_expires_30_days.png"} 
									className="w-[13px] h-3.5 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[25px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/ay5mfcmo_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Central Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-gray-100 py-1 px-2.5 rounded-xl">
										<span className="text-gray-600 text-[11px] font-bold" >
											Completed
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Prism Layout Renderer
								</span>
								<span className="text-gray-700 text-[13px] w-[310px]" >
									Styling layout toolkit specifically optimized for heavy structural rendering systems.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/8emv3cbu_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Esther Howard
									</span>
								</div>
								<img
									src={"/assets/images/3wwkpvoj_expires_30_days.png"} 
									className="w-[107px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product E
								</span>
								<img
									src={"/assets/images/uwf3l1k4_expires_30_days.png"} 
									className="w-[13px] h-3.5 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/sbw7kyxi_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-1 px-2.5 rounded-xl">
										<span className="text-[#FF6B4E] text-[11px] font-bold" >
											North Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Active
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									PubSub Stream Router
								</span>
								<span className="text-gray-700 text-[13px]" >
									Low-latency pipeline designed for handling peak transaction streaming bursts safely.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/vfzff8e4_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Robert Fox
									</span>
								</div>
								<img
									src={"/assets/images/fneg2xtt_expires_30_days.png"} 
									className="w-[108px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product F
								</span>
								<img
									src={"/assets/images/sadx6ey8_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch mb-12">
						<div className="flex flex-1 flex-col items-center bg-white py-6 mr-6 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/6ey4zgxn_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-orange-50 py-1 px-2.5 rounded-xl">
										<span className="text-[#F97316] text-[11px] font-bold" >
											South Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-teal-50 py-1 px-2.5 rounded-xl">
										<span className="text-teal-600 text-[11px] font-bold" >
											Active
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Distributed Solar Cache
								</span>
								<span className="text-gray-700 text-[13px] w-[315px]" >
									Distributed local caching systems optimized for zero-footprint clean energy grids.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/o26nk4hk_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Leslie Alexander
									</span>
								</div>
								<img
									src={"/assets/images/a7rmv543_expires_30_days.png"} 
									className="w-[107px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product G
								</span>
								<img
									src={"/assets/images/xq4mn1x4_expires_30_days.png"} 
									className="w-[13px] h-3.5 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[25px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/9l7ql9jo_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-1 px-2.5 rounded-xl">
										<span className="text-[#FF6B4E] text-[11px] font-bold" >
											North Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-gray-100 py-1 px-2.5 rounded-xl">
										<span className="text-gray-600 text-[11px] font-bold" >
											Completed
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Auto-Fix Vuln Shield
								</span>
								<span className="text-gray-700 text-[13px] w-[337px]" >
									Automated container scanning system that pushes fixes directly to staging branches.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/ewtlh3uj_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Guy Hawkins
									</span>
								</div>
								<img
									src={"/assets/images/mfibfhrl_expires_30_days.png"} 
									className="w-[107px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product H
								</span>
								<img
									src={"/assets/images/t9o3tqm0_expires_30_days.png"} 
									className="w-[13px] h-3.5 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center bg-white py-6 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293708"
							}}>
							<img
								src={"/assets/images/8o0uh30p_expires_30_days.png"} 
								className="w-[362px] h-40 mb-5 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-5 mx-6 gap-2.5">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start bg-orange-50 py-1 px-2.5 rounded-xl">
										<span className="text-[#F97316] text-[11px] font-bold" >
											South Region
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-amber-100 py-1 px-2.5 rounded-xl">
										<span className="text-amber-600 text-[11px] font-bold" >
											Paused
										</span>
									</div>
								</div>
								<span className="text-gray-900 text-lg font-bold" >
									Dynamic Flow Simulator
								</span>
								<span className="text-gray-700 text-[13px]" >
									Database stress test simulator creating realistic connection surges at scale.
								</span>
							</div>
							<div className="self-stretch bg-[#EDE9DF] h-[1px] mb-[19px] mx-6">
							</div>
							<div className="flex justify-between items-center self-stretch mb-5 mx-6">
								<div className="flex shrink-0 items-center gap-2">
									<img
										src={"/assets/images/ubaor3n5_expires_30_days.png"} 
										className="w-7 h-7 object-fill"
									/>
									<span className="text-gray-900 text-[13px] font-bold" >
										Jane Cooper
									</span>
								</div>
								<img
									src={"/assets/images/d7qj3v9f_expires_30_days.png"} 
									className="w-[108px] h-8 object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch py-1 mx-6">
								<span className="text-[#FF6B4E] text-xs font-bold 
									textDecorationLine: underline" >
									Linked: Product J
								</span>
								<img
									src={"/assets/images/gbeyzw3m_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-start self-stretch pt-4 pb-20 px-20">
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"/assets/images/obt76dg0_expires_30_days.png"} 
							className="w-3.5 h-3.5 rounded-[20px] object-fill"
						/>
						<span className="text-gray-700 text-[13px] font-bold" >
							Previous
						</span>
					</button>
					<div className="flex shrink-0 items-center gap-1">
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[9px] px-[15px] rounded-[999px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[13px] font-bold" >
								1
							</span>
						</button>
						<div className="flex flex-col shrink-0 items-start py-[9px] px-3.5 rounded-[999px]">
							<span className="text-gray-700 text-[13px] font-bold" >
								2
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start py-[9px] px-3.5 rounded-[999px]">
							<span className="text-gray-700 text-[13px] font-bold" >
								3
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start py-[9px] px-3 rounded-[999px]">
							<span className="text-gray-700 text-[13px] font-bold" >
								...
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start py-[9px] px-3.5 rounded-[999px]">
							<span className="text-gray-700 text-[13px] font-bold" >
								8
							</span>
						</div>
					</div>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-2.5 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-gray-700 text-[13px] font-bold" >
							Next
						</span>
						<img
							src={"/assets/images/o5nyejzj_expires_30_days.png"} 
							className="w-3.5 h-3.5 rounded-[20px] object-fill"
						/>
					</button>
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
									src={"/assets/images/omp5prqg_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/mo9kjc1q_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/l4nwhoai_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/o9p3q9wt_expires_30_days.png"} 
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