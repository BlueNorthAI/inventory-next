'use client';
// import { json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';

import SnopScenarioFrom from '@/components/snop/ScenarioForm';
// import { getTruckInput } from '~/models/input.server';
// import { createTruck } from '~/models/truck.server';

// function convertToNumbers(obj) {
//   const numericFields = [
//     'purchase_cost',
//     'mileage_with_load',
//     'mileage_without_load',
//     'maintenance',
//     'capacity',
//     'annual_distance',
//     'life',
//     'diesel_price',
//     'loading_unloading',
//     'toll',
//     'route_expenses',
//     'driver_expenses',
//     'tyres'
//   ];

//   const converted = { ...obj };

//   numericFields.forEach((field) => {
//     if (converted[field]) {
//       converted[field] = parseFloat(converted[field]);
//     }
//   });

//   return converted;
// }
// export const loader = async () => {
//   const snopTruck = await getTruckInput();
//   return json({ snopTruck });
// };

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const updates = convertToNumbers(Object.fromEntries(formData));
//   await createTruck(updates);
// };

export default function SnopTruck() {
  //   const { snopTruck } = useLoaderData();

  return (
    <div className="m-2">
      {/* <SnopScenarioFrom truckData={snopTruck} /> */}
      <SnopScenarioFrom truckData={undefined}  />
    </div>
  );
}
