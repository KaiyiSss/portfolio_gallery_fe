import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export default () => {
	const navigate = useNavigate();
	const [input1, onChangeInput1] = useState('');
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
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>navigate("/TechiesHub")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Techies
							</span>
						</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/1608mve1_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white py-[72px] px-20 gap-3">
					<span className="text-gray-900 text-[40px] font-bold" >
						Techies — Documentation &amp; Solutions
					</span>
					<span className="text-gray-700 text-base w-[596px]" >
						The engineering central repository. Technical implementation guidelines, security guidelines, sandbox guides, and database migration routines.
					</span>
				</div>
				<div className="flex items-start self-stretch pt-12 pb-20 px-20 gap-10">
					<div className="flex flex-col items-start bg-white w-[280px] p-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-400 text-sm font-bold" >
							Categories
						</span>
						<div className="flex flex-col self-stretch gap-2">
							<input
								placeholder="API Guides"
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="self-stretch text-[#FF6B4E] bg-[#FFF0EC] text-sm font-bold py-2.5 px-4 rounded-lg border-0"
							/>
							<div className="flex flex-col items-start self-stretch py-2.5 pl-4 rounded-lg">
								<span className="text-gray-700 text-sm" >
									Architecture
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch py-2.5 pl-4 rounded-lg">
								<span className="text-gray-700 text-sm" >
									DevOps
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch py-2.5 pl-4 rounded-lg">
								<span className="text-gray-700 text-sm" >
									Security
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch py-2.5 pl-4 rounded-lg">
								<span className="text-gray-700 text-sm" >
									Best Practices
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col gap-8">
						<div className="flex items-center self-stretch bg-white py-[11px] px-5 rounded-[28px] border border-solid border-[#EDE9DF]">
							<img
								src={"/assets/images/3p9ewot4_expires_30_days.png"} 
								className="w-5 h-5 mr-3 rounded-[28px] object-fill"
							/>
							<span className="text-gray-700 text-[15px]" >
								Search documentation, endpoints, guidelines...
							</span>
							<div className="flex-1 self-stretch">
							</div>
							<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-2 px-4 rounded-[20px] border-0"
								onClick={()=>alert("Search results would display here")}>
								<span className="text-white text-[13px] font-bold" >
									Search
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start self-stretch bg-teal-50 py-8 pr-8 gap-4 rounded-2xl border border-solid border-teal-600">
							<div className="flex items-center ml-8 gap-2">
								<div className="flex flex-col shrink-0 items-start bg-teal-600 py-0.5 px-2 rounded">
									<span className="text-white text-[11px] font-bold" >
										FEATURED PIN
									</span>
								</div>
								<span className="text-teal-600 text-xs font-bold" >
									Architecture Standards
								</span>
							</div>
							<span className="text-gray-900 text-2xl font-bold ml-8" >
								Unified telemetry payload formatting blueprint v2.4
							</span>
							<span className="text-gray-700 text-sm ml-8" >
								The global schemas for logging and error reporting hooks. Mandatory formatting blueprints for all core cluster systems and third-party integration pipelines. Review validation rules before upgrading to Kafka components.
							</span>
							<div className="flex justify-between items-center self-stretch ml-8">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-[7px] rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											M
										</span>
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Maya Lin • Sep 30
									</span>
								</div>
								<span className="text-teal-600 text-[13px] font-bold 
									textDecorationLine: underline" >
									Read Blueprint
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch gap-5">
							<span className="text-gray-900 text-lg font-bold" >
								All Articles
							</span>
							<div className="flex flex-col items-start self-stretch bg-white py-6 pr-6 rounded-2xl border border-solid border-[#EDE9DF]" 
								style={{
									boxShadow: "0px 4px 8px #1F293703"
								}}>
								<div className="flex justify-between items-center self-stretch mb-4 ml-6">
									<div className="flex flex-col shrink-0 items-start bg-gray-100 py-1 px-2 rounded">
										<span className="text-gray-700 text-[11px] font-bold" >
											DevOps
										</span>
									</div>
									<span className="text-gray-400 text-xs" >
										8 min read
									</span>
								</div>
								<span className="text-gray-900 text-xl font-bold mb-4 ml-6" >
									Kafka cluster hot-rebalancing scripts &amp; pipelines
								</span>
								<span className="text-gray-700 text-sm mb-4 ml-6" >
									Learn how we dynamically mitigate consumer lag peaks across active multi-region broker deployments using partition reassignment thresholds.
								</span>
								<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] ml-6">
								</div>
								<div className="flex justify-between items-center self-stretch ml-6">
									<div className="flex shrink-0 items-center gap-2">
										<div className="flex flex-col shrink-0 items-start bg-teal-600 py-[5px] px-2 rounded-xl">
											<span className="text-white text-[10px] font-bold" >
												C
											</span>
										</div>
										<span className="text-gray-700 text-[13px]" >
											Carlos S. • Oct 10, 2025
										</span>
									</div>
									<span className="text-[#FF6B4E] text-[13px] font-bold 
										textDecorationLine: underline" >
										Read Document
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-6 pr-6 rounded-2xl border border-solid border-[#EDE9DF]" 
								style={{
									boxShadow: "0px 4px 8px #1F293703"
								}}>
								<div className="flex justify-between items-center self-stretch mb-4 ml-6">
									<div className="flex flex-col shrink-0 items-start bg-gray-100 py-1 px-2 rounded">
										<span className="text-gray-700 text-[11px] font-bold" >
											Architecture
										</span>
									</div>
									<span className="text-gray-400 text-xs" >
										12 min read
									</span>
								</div>
								<span className="text-gray-900 text-xl font-bold mb-4 ml-6" >
									Localized threshold alerting triggers: Go engine architecture
								</span>
								<span className="text-gray-700 text-sm mb-4 ml-6" >
									An in-depth breakdown of Zero-overhead container telemetry pipelines. Discover local proxy integration tactics with thread-safe telemetry storage.
								</span>
								<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] ml-6">
								</div>
								<div className="flex justify-between items-center self-stretch ml-6">
									<div className="flex shrink-0 items-center gap-2">
										<div className="flex flex-col shrink-0 items-start bg-teal-600 py-[5px] px-[7px] rounded-xl">
											<span className="text-white text-[10px] font-bold" >
												M
											</span>
										</div>
										<span className="text-gray-700 text-[13px]" >
											Maya Lin • Sep 22, 2025
										</span>
									</div>
									<span className="text-[#FF6B4E] text-[13px] font-bold 
										textDecorationLine: underline" >
										Read Document
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-6 pr-6 rounded-2xl border border-solid border-[#EDE9DF]" 
								style={{
									boxShadow: "0px 4px 8px #1F293703"
								}}>
								<div className="flex justify-between items-center self-stretch mb-4 ml-6">
									<div className="flex flex-col shrink-0 items-start bg-gray-100 py-1 px-2 rounded">
										<span className="text-gray-700 text-[11px] font-bold" >
											Security
										</span>
									</div>
									<span className="text-gray-400 text-xs" >
										5 min read
									</span>
								</div>
								<span className="text-gray-900 text-xl font-bold mb-4 ml-6" >
									Securing cluster keys: Automated HashiCorp vault sync
								</span>
								<span className="text-gray-700 text-sm mb-4 ml-6" >
									Outlining the cron routines built into standard cluster blueprints for rotating sensitive telemetry signatures safely with no active downtime.
								</span>
								<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] ml-6">
								</div>
								<div className="flex justify-between items-center self-stretch ml-6">
									<div className="flex shrink-0 items-center gap-2">
										<div className="flex flex-col shrink-0 items-start bg-teal-600 py-[5px] px-2 rounded-xl">
											<span className="text-white text-[10px] font-bold" >
												A
											</span>
										</div>
										<span className="text-gray-700 text-[13px]" >
											Alex Mercer • Sep 15, 2025
										</span>
									</div>
									<span className="text-[#FF6B4E] text-[13px] font-bold 
										textDecorationLine: underline" >
										Read Document
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
									src={"/assets/images/etlfzu64_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/9qjy8ono_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/hbjakka0_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ni8ry0tc_expires_30_days.png"} 
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