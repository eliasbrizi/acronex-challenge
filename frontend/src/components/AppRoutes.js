import { Route, Routes } from "react-router-dom"
import { MachinesList } from "../pages/MachineList/MachinesList"
import { MachineDetail } from "../pages/MachineDetail/MachineDetail"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/machines/:id" element={<MachineDetail />} />
      <Route path="/machines" element={<MachinesList />} />
    </Routes>
  )
}
