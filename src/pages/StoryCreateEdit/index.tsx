import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#FDFBF7] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-7 px-20">
					<div className="flex shrink-0 items-center gap-2.5">
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[5px] px-3 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl border-0"
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
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>`n<span className="text-gray-700 text-sm" >`nVirtual Visit`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Team Activities
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>`n<span className="text-gray-700 text-sm" >`nRoadmaps`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>`n<span className="text-gray-700 text-sm" >`nTechies`n</span>`n</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/jmp9obqr_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-4">
					<div className="flex shrink-0 items-center ml-20 mr-2 gap-2.5">
						<span className="text-gray-700 text-[13px]" >
							Team Activities
						</span>
						<img
							src={"/assets/images/ig5fhuyc_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						New Story
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch pt-12 pr-20">
					<div className="flex flex-col items-start pr-[23px] mb-8 ml-20 gap-2">
						<span className="text-gray-900 text-[32px] font-bold" >
							Write a New Activity Story
						</span>
						<span className="text-gray-700 text-[15px] w-[617px]" >
							All teammates have equal access to share milestones, retroactive team building recaps, solar server backup summaries, and active team updates.
						</span>
					</div>
					<div className="flex flex-col self-stretch bg-white p-8 mb-8 ml-20 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
						<div className="flex items-center self-stretch gap-5">
							<div className="flex flex-1 flex-col items-start gap-2">
								<div className="flex items-center gap-1.5">
									<span className="text-gray-700 text-sm font-bold" >
										Story Title
									</span>
									<span className="text-[#FF6B4E] text-sm font-bold" >
										*
									</span>
								</div>
								<input
									placeholder="e.g. Sailing retrospect in the South Region: Outdoor team bonding"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
								/>
							</div>
							<div className="flex flex-1 flex-col items-start gap-2">
								<div className="flex items-center gap-1.5">
									<span className="text-gray-700 text-sm font-bold" >
										Story Type
									</span>
									<span className="text-[#FF6B4E] text-sm font-bold" >
										*
									</span>
								</div>
								<input
									placeholder="Team Event / Achievement / Behind-the-Scenes"
									value={input2}
									onChange={(event)=>onChangeInput2(event.target.value)}
									className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch gap-2">
							<span className="text-gray-700 text-sm font-bold" >
								Featured Image
							</span>
							<div className="flex flex-col items-center self-stretch bg-[#FDFBF7] py-[53px] gap-3 rounded-lg border border-solid border-[#EDE9DF]">
								<img
									src={"/assets/images/4r28g37s_expires_30_days.png"} 
									className="w-10 h-10 rounded-lg object-fill"
								/>
								<span className="text-gray-700 text-sm" >
									Upload high-res featured landscape cover image
								</span>
								<span className="text-gray-400 text-[11px]" >
									Optimal aspect ratio 16:9 (PNG, JPG up to 10MB)
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch gap-2">
							<span className="text-gray-700 text-sm font-bold" >
								Story Content
							</span>
							<div className="self-stretch bg-[#FDFBF7] rounded-lg border border-solid border-[#EDE9DF]">
								<div className="flex items-center self-stretch bg-[#FDFBF7] py-2">
									<div className="flex shrink-0 items-center ml-3 mr-6 gap-2">
										<img
											src={"/assets/images/46gyz2p2_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/s3wyk54s_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/a1v1vsez_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/1ayje4la_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/u9q77kqo_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/dpfmeimv_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/raed5tcz_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
										<img
											src={"/assets/images/76plwfa3_expires_30_days.png"} 
											className="w-8 h-8 rounded-md object-fill"
										/>
									</div>
									<span className="text-gray-400 text-xs" >
										Draft saved automatically
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pt-3.5 pl-3.5">
									<span className="text-gray-400 text-sm mb-[241px]" >
										Start typing the story outline here. Share technical retro insights, what you ate, the funny bug that took 3 hours, and global team moments...
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-start self-stretch gap-10">
							<div className="flex flex-col items-start w-[280px] gap-2.5">
								<span className="text-gray-700 text-sm font-bold" >
									Auto-Captured Author
								</span>
								<div className="flex items-center self-stretch bg-[#FDFBF7] py-3 rounded-lg border border-solid border-[#EDE9DF]">
									<img
										src={"/assets/images/k7agolfs_expires_30_days.png"} 
										className="w-8 h-8 mx-3 rounded-2xl object-fill"
									/>
									<div className="flex flex-col shrink-0 items-start gap-0.5">
										<span className="text-gray-900 text-[13px] font-bold mr-[41px]" >
											Maya Lin
										</span>
										<span className="text-gray-400 text-[11px]" >
											Principal Architect
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start mt-[25px] gap-2.5">
								<span className="text-gray-700 text-sm font-bold" >
									Story Tags
								</span>
								<div className="flex items-center gap-2">
									<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-2 px-3.5 rounded-[20px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#FF6B4E] text-xs font-bold" >
											South Region Retrospective
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-2 px-3.5 rounded-[20px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#FF6B4E] text-xs font-bold" >
											Outdoor Retrospective
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-2 px-3.5 rounded-[20px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#FF6B4E] text-xs font-bold" >
											Clean Energy
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-2 px-3.5 rounded-[20px] border border-solid border-[#EDE9DF]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-gray-700 text-xs font-bold" >
											+ Add Tag
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col self-stretch mb-20 ml-20 gap-5">
						<input
							placeholder="💡 Note: Published stories are immediately visible to all users across Foundations Gallery. Shared retromoments build visual system culture!"
							value={input3}
							onChange={(event)=>onChangeInput3(event.target.value)}
							className="self-stretch text-teal-600 bg-teal-50 text-[13px] p-4 rounded border-0"
						/>
						<div className="flex justify-between items-center self-stretch">
							<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-6 rounded-lg border border-solid border-[#EDE9DF]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-gray-700 text-sm font-bold" >
									Save as Draft
								</span>
							</button>
							<div className="flex shrink-0 items-center gap-3">
								<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-6 rounded-lg border border-solid border-teal-600"
									onClick={()=>alert("Pressed!")}>
									<span className="text-teal-600 text-sm font-bold" >
										Preview Story
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-3 px-6 rounded-lg border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										Publish Story
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch bg-gray-900 pt-20 px-20">
					<div className="flex justify-between items-start self-stretch mb-12">
						<div className="flex flex-col items-start w-80 pr-5 gap-4">
							<div className="flex items-center gap-2.5">
								<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[3px] px-[9px] rounded-md">
									<span className="text-white text-sm font-bold" >
										F
									</span>
								</div>
								<span className="text-white text-lg" >
									Foundations Gallery
								</span>
							</div>
							<span className="text-gray-400 text-sm w-[300px]" >
								An active internal showcase of the products, missions, activities, and roadmaps driving our modern technology stack.
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-3">
							<span className="text-white text-sm font-bold mr-[53px]" >
								Showcase
							</span>
							<span className="text-gray-400 text-sm mr-14" >
								All Products
							</span>
							<span className="text-gray-400 text-sm mr-[27px]" >
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
							<span className="text-gray-400 text-sm mr-3.5" >
								Techies Forum
							</span>
							<span className="text-gray-400 text-sm mr-[17px]" >
								Global Offices
							</span>
							<span className="text-gray-400 text-sm mr-[21px]" >
								Contributions
							</span>
						</div>
						<div className="flex flex-col items-start w-[280px] pr-[27px] gap-4">
							<span className="text-white text-sm font-bold" >
								Connect with us
							</span>
							<span className="text-gray-400 text-sm w-[253px]" >
								Have questions or want to host a roadmap presentation? Get in touch at foundations@gallery.internal
							</span>
							<div className="flex items-center gap-3">
								<img
									src={"/assets/images/isuif79a_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/js2hmxpx_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/kfd0we3f_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/oilddj97_expires_30_days.png"} 
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