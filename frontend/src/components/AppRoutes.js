import { Route, Routes } from "react-router-dom"
import { MachinesList } from "../pages/MachineList/MachinesList"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<MachinesList />} />
    </Routes>
  )
}
