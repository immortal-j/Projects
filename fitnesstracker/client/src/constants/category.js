const workoutColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f',
'#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const intakeColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48',
'#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
export const intakeCategories = [
 { type: 'Egg', amount: 0, cal:80, color: intakeColors[0] },
 { type: 'Bread and Butter',cal:90, amount: 0, color: intakeColors[1] },
 { type: 'Chapati', amount: 0,cal:60, color: intakeColors[2] },
 { type: 'Paratha', amount: 0,cal:150, color: intakeColors[3] },
 { type: 'Sabji', amount: 0,cal:150, color: intakeColors[4] },
 { type: 'Rice', amount: 0,cal:120, color: intakeColors[5] },
 { type: 'Beverages', amount: 0,cal:70, color: intakeColors[6] },
 { type: 'Butter and Ghee', amount: 0,cal:60, color: intakeColors[6] },
 { type: 'Ice-Cream', amount: 0,cal:200, color: intakeColors[7] },
 { type: 'Fast-Food', amount: 0,cal:300, color: intakeColors[8] },
];
export const workoutCategories = [
 { type: 'Running', amount: 0,cal:250, color: workoutColors[0] },
 { type: 'Walking', amount: 0,cal:180, color: workoutColors[1] },
 { type: 'Jump Rope', amount: 0,cal:195, color: workoutColors[2] },
 { type: 'Tread Mill', amount: 0,cal:200, color: workoutColors[3] },
 { type: 'Swimming', amount: 0,cal:220, color: workoutColors[4] },
 { type: 'Hiking', amount: 0,cal:190, color: workoutColors[5] },
 { type: 'Weight Machine', amount: 0,cal:230, color: workoutColors[6] },
 { type: 'Circuit trainging', amount: 0,cal:200, color: workoutColors[7] },
 { type: 'Dancing', amount: 0,cal:130, color: workoutColors[8] },
 { type: 'Playing a Sport', amount: 0,cal:180, color: workoutColors[9] },
];
export const resetCategories = () => {
 intakeCategories.forEach((c) => c.amount = 0);
 workoutCategories.forEach((c) => c.amount = 0);
};