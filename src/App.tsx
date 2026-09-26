import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLanding from './pages/HomeLanding';
import ProductCreateEdit from './pages/ProductCreateEdit';
import ProductDetail from './pages/ProductDetail';
import ProductsListing from './pages/ProductsListing';
import RaiseRequirementFlow from './pages/RaiseRequirementFlow';
import RoadmapCreateInvite from './pages/RoadmapCreateInvite';
import RoadmapDetail from './pages/RoadmapDetail';
import RoadmapsListing from './pages/RoadmapsListing';
import SettingsPermissions from './pages/SettingsPermissions';
import StoryCreateEdit from './pages/StoryCreateEdit';
import TeamActivities from './pages/TeamActivities';
import TechiesDocEditor from './pages/TechiesDocEditor';
import TechiesHub from './pages/TechiesHub';
import VirtualVisit from './pages/VirtualVisit';
import VirtualVisitAdmin from './pages/VirtualVisitAdmin';
import VirtualVisitProjects from './pages/VirtualVisitProjects';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<HomeLanding />} />
			<Route path="/HomeLanding" element={<HomeLanding />} />
			<Route path="/ProductCreateEdit" element={<ProductCreateEdit />} />
			<Route path="/ProductDetail" element={<ProductDetail />} />
			<Route path="/ProductsListing" element={<ProductsListing />} />
			<Route path="/RaiseRequirementFlow" element={<RaiseRequirementFlow />} />
			<Route path="/RoadmapCreateInvite" element={<RoadmapCreateInvite />} />
			<Route path="/RoadmapDetail" element={<RoadmapDetail />} />
			<Route path="/RoadmapsListing" element={<RoadmapsListing />} />
			<Route path="/SettingsPermissions" element={<SettingsPermissions />} />
			<Route path="/StoryCreateEdit" element={<StoryCreateEdit />} />
			<Route path="/TeamActivities" element={<TeamActivities />} />
			<Route path="/TechiesDocEditor" element={<TechiesDocEditor />} />
			<Route path="/TechiesHub" element={<TechiesHub />} />
			<Route path="/VirtualVisit" element={<VirtualVisit />} />
			<Route path="/VirtualVisitAdmin" element={<VirtualVisitAdmin />} />
			<Route path="/VirtualVisitProjects" element={<VirtualVisitProjects />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;