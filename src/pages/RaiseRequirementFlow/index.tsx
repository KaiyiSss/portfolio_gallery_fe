import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
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
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>`n<span className="text-gray-700 text-sm" >`nVirtual Visit`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>`n<span className="text-gray-700 text-sm" >`nTeam Activities`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Roadmaps
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>`n<span className="text-gray-700 text-sm" >`nTechies`n</span>`n</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/ybfneshz_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-4">
					<div className="flex shrink-0 items-center ml-20 mr-2 gap-[11px]">
						<span className="text-gray-700 text-[13px]" >
							Roadmaps
						</span>
						<img
							src={"/assets/images/h2m3a9ri_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<div className="flex shrink-0 items-center mr-2 gap-2.5">
						<span className="text-gray-700 text-[13px]" >
							Product A
						</span>
						<img
							src={"/assets/images/mvpcry6s_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						Raise Requirement
					</span>
				</div>
				<div className="flex flex-col items-center self-stretch pt-12">
					<div className="flex flex-col items-center px-[43px] mb-8 gap-3">
						<span className="text-gray-900 text-[32px] font-bold" >
							Configure Product Requirement
						</span>
						<span className="text-gray-700 text-[15px] text-center w-[631px]" >
							All users (teammates, customers, stakeholders) can raise requirements on public roadmaps. Use this form to submit requests directly to product owners.
						</span>
					</div>
					<div className="flex flex-col items-start bg-white w-[720px] p-10 mb-8 gap-6 rounded-[20px] border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-xl font-bold" >
							Raise a New Requirement
						</span>
						<div className="flex flex-col self-stretch gap-5">
							<div className="flex flex-col items-start self-stretch gap-1.5">
								<span className="text-gray-700 text-[13px] font-bold" >
									Target Product
								</span>
								<input
									placeholder="Product A — Infrastructure Analytics"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="self-stretch text-gray-900 bg-[#FDFBF7] text-sm font-bold py-3 px-4 rounded-lg border border-solid border-[#EDE9DF]"
								/>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1.5">
								<div className="flex items-center gap-[7px]">
									<span className="text-gray-700 text-[13px] font-bold" >
										Requirement Title
									</span>
									<span className="text-[#FF6B4E] text-[13px] font-bold" >
										*
									</span>
								</div>
								<input
									placeholder="e.g. Localized database replica health checks"
									value={input2}
									onChange={(event)=>onChangeInput2(event.target.value)}
									className="self-stretch text-gray-700 bg-[#FDFBF7] text-sm py-3 px-4 rounded-lg border border-solid border-[#FF6B4E]"
								/>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1.5">
								<div className="flex items-center gap-1.5">
									<span className="text-gray-700 text-[13px] font-bold" >
										Description
									</span>
									<span className="text-[#FF6B4E] text-[13px] font-bold" >
										*
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] pt-3 pl-4 rounded-lg border border-solid border-[#EDE9DF]">
									<span className="text-gray-400 text-sm w-[567px] mb-12" >
										Describe your requirement in detail. Include core benefits, user impact, and any technical deployment details...
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-2">
								<span className="text-gray-700 text-[13px] font-bold" >
									Priority Suggestion
								</span>
								<div className="flex items-center self-stretch gap-6">
									<div className="flex shrink-0 items-center gap-2">
										<img
											src={"/assets/images/w4a21d4b_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-900 text-[13px] font-bold" >
											P0 (Critical)
										</span>
									</div>
									<div className="flex shrink-0 items-center gap-2">
										<img
											src={"/assets/images/srgmxq5v_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-[13px]" >
											P1 (High)
										</span>
									</div>
									<div className="flex shrink-0 items-center gap-2">
										<img
											src={"/assets/images/82ef3l50_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-gray-700 text-[13px]" >
											P2 (Nice to Have)
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1.5">
								<span className="text-gray-700 text-[13px] font-bold" >
									Business Justification (Optional)
								</span>
								<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] pt-3 pl-4 rounded-lg border border-solid border-[#EDE9DF]">
									<span className="text-gray-400 text-sm mb-[49px]" >
										Why is this request valuable to operations or your target clients?
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch gap-4">
								<div className="flex flex-col items-start w-[312px] gap-1.5">
									<span className="text-gray-700 text-[13px] font-bold" >
										Your Name
									</span>
									<input
										placeholder="Carlos Santana"
										value={input3}
										onChange={(event)=>onChangeInput3(event.target.value)}
										className="self-stretch text-gray-700 bg-[#FDFBF7] text-sm py-3 px-4 rounded-lg border border-solid border-[#EDE9DF]"
									/>
								</div>
								<div className="flex flex-col items-start w-[312px] gap-1.5">
									<span className="text-gray-700 text-[13px] font-bold" >
										Your Email
									</span>
									<input
										placeholder="carlos@gallery.internal"
										value={input4}
										onChange={(event)=>onChangeInput4(event.target.value)}
										className="self-stretch text-gray-700 bg-[#FDFBF7] text-sm py-3 px-4 rounded-lg border border-solid border-[#EDE9DF]"
									/>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1.5">
								<span className="text-gray-700 text-[13px] font-bold" >
									Department / Organization
								</span>
								<div className="flex justify-between items-center self-stretch bg-[#FDFBF7] py-3 px-4 rounded-lg border border-solid border-[#EDE9DF]">
									<span className="text-gray-900 text-sm font-bold" >
										Core Infrastructure &amp; Telemetry
									</span>
									<img
										src={"/assets/images/ro6jjjkv_expires_30_days.png"} 
										className="w-3.5 h-3.5 rounded-lg object-fill"
									/>
								</div>
							</div>
						</div>
						<div className="flex justify-end items-center self-stretch gap-3">
							<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-3 px-5 rounded-lg border border-solid border-[#EDE9DF]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-gray-700 text-sm font-bold" >
									Cancel
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-3 px-6 rounded-lg border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-sm font-bold" >
									Submit Requirement
								</span>
							</button>
						</div>
					</div>
					<div className="flex flex-col items-center bg-teal-50 w-[720px] py-6 mb-20 gap-3 rounded-2xl border border-solid border-teal-600">
						<div className="flex items-center gap-3">
							<img
								src={"/assets/images/nwstb5gk_expires_30_days.png"} 
								className="w-6 h-6 object-fill"
							/>
							<span className="text-teal-600 text-base font-bold" >
								Requirement Submitted Successfully!
							</span>
						</div>
						<span className="text-gray-700 text-sm" >
							The product owner (Maya Lin) will review your submission and notify you via email.
						</span>
						<div className="flex items-center py-1 gap-[7px]">
							<span className="text-teal-600 text-[13px] font-bold 
								textDecorationLine: underline" >
								Back to Roadmap
							</span>
							<img
								src={"/assets/images/cpnj6gmy_expires_30_days.png"} 
								className="w-3.5 h-3.5 object-fill"
							/>
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
									src={"/assets/images/jmru9mu7_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/inraavev_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/6ovqgevi_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/4tus868s_expires_30_days.png"} 
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