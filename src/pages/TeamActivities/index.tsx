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
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>
							<span className="text-gray-700 text-sm" >
								Virtual Visit
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>navigate("/TeamActivities")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
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
							src={"/assets/images/71i2mn5e_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white pt-20 pl-20">
					<span className="text-gray-900 text-[40px] font-bold mb-3" >
						Team Activities — Life Beyond Work
					</span>
					<span className="text-gray-700 text-base w-[557px] mb-12" >
						Read behind-the-scenes stories written by creators, engineers, and product specialists across our cross-functional collectives.
					</span>
				</div>
				<div className="flex items-start self-stretch py-14 px-20">
					<div className="flex flex-1 flex-col mr-6 gap-6">
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/ws1uvqoi_expires_30_days.png"} 
								className="w-[374px] h-[280px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold w-[344px]" >
									Building the foundations: How we set up our first telemetry deck
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-[7px] rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											M
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Maya Lin
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Sep 24
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/xh0d6ke2_expires_30_days.png"} 
								className="w-[374px] h-[190px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold" >
									Solar backing our server clusters
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-2 rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											C
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Carlos Santana
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Sep 10
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/op8gq7gt_expires_30_days.png"} 
								className="w-[374px] h-[210px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold" >
									Local sandbox testing strategies
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-2 rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											C
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Carlos Santana
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Aug 20
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col mr-[25px] gap-6">
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/3rfzos8y_expires_30_days.png"} 
								className="w-[374px] h-[180px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold w-[351px]" >
									Sailing in the South Region: An outdoor team retrospective
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-[9px] rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											A
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Alex Mercer
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Sep 18
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/kd1d8mdn_expires_30_days.png"} 
								className="w-[374px] h-60 mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold" >
									A day at the Techies hackathon workshop
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-[9px] rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											K
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Kobe Bryant
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Sep 05
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/mfkudt62_expires_30_days.png"} 
								className="w-[374px] h-[260px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold" >
									Inside the clean energy transition audit
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-[9px] rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											A
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Alex Mercer
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Aug 15
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col gap-6">
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/blxkrzmz_expires_30_days.png"} 
								className="w-[374px] h-[220px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold" >
									Designing the Canvas component from scratch
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-2 rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											D
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Dina Patel
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Sep 15
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center self-stretch bg-white py-[18px] rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 10px #1F293708"
							}}>
							<img
								src={"/assets/images/u15nf0o2_expires_30_days.png"} 
								className="w-[374px] h-[200px] mb-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-4 mx-[18px] gap-2.5">
								<span className="text-gray-900 text-base font-bold w-[300px]" >
									How Product B scaled to its first billion embedding requests
								</span>
								<span className="text-gray-700 text-[13px]" >
									Excerpt outlining key highlights of the work. Discover how collaboration drives quality releases and technical satisfaction across the board.
								</span>
							</div>
							<div className="self-stretch bg-gray-100 h-[1px] mb-[15px] mx-[18px]">
							</div>
							<div className="flex justify-between items-center self-stretch mx-[18px]">
								<div className="flex shrink-0 items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[5px] px-[7px] rounded-xl">
										<span className="text-white text-[10px] font-bold" >
											M
										</span>
									</div>
									<span className="text-gray-900 text-xs font-bold" >
										Maya Lin
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									Aug 29
								</span>
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
									src={"/assets/images/8xfuaiqz_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ow7b7zz0_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/13c7cjyo_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/b78xlg8r_expires_30_days.png"} 
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