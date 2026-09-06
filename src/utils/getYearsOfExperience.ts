export const CAREER_START_YEAR = 2019;
const MID_YEAR_MONTH_INDEX = 6; // July, 0-indexed

export function getYearsOfExperience(now: Date = new Date()): number {
	const milestoneYear = now.getFullYear() - CAREER_START_YEAR;
	const isSecondHalf = now.getMonth() >= MID_YEAR_MONTH_INDEX;
	return isSecondHalf ? milestoneYear : milestoneYear - 1;
}
