export enum EmploymentType {
	FULL_TIME = "Full Time",
	PART_TIME = "Part Time",
	CONTRACTOR = "Contractor",
	TEMPORARY = "Temporary",
	INTERN = "Intern",
	VOLUNTEER = "Volunteer",
	PER_DIEM = "Per Diem",
	OTHER = "Other",
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Location {
	existingLocation?: EntityReference,
	externalLocation?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface YextBoundingBox {
	southWest: Coordinate,
	northEast: Coordinate,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum C_activeInAnswers {
	YES = "Yes",
	NO = "No",
}

export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Job {
	applicationUrl?: string,
	datePosted?: string,
	employmentType?: EmploymentType,
	hiringOrganization?: string,
	jobLocation?: EntityReference,
	landingPageUrl?: string,
	location?: Location,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	slug?: string,
	validThrough?: any,
	workRemote?: boolean,
	yextBoundingBox?: YextBoundingBox,
	description?: string,
	logo?: ComplexImage,
	name: string,
	c_activeInAnswers?: C_activeInAnswers,
	c_advancement?: string,
	c_department?: string,
	c_diversity?: string,
	c_drivingSpecificJobDuties?: string,
	c_flexibleHours?: boolean,
	c_hiringBonus?: boolean,
	c_hours?: Hours,
	c_jobDescription?: string,
	c_jobRequirements?: string,
	c_locationJobs?: EntityReference[],
	c_physicalDemands?: string[],
	c_physicalRequirements?: string,
	c_premiumPayOptions?: boolean,
	c_primaryCTA?: C_primaryCTA,
	c_qualifications?: string,
	c_relatedJobs?: EntityReference[],
	c_requires?: string,
	c_secondaryCTA?: C_secondaryCTA,
	c_sensing?: string,
	c_summaryStatement?: string,
	c_temperaments?: string,
	c_tuitionReimbursement?: boolean,
	c_workConditions?: string,
	displayCoordinate?: Coordinate,
	keywords?: string[],
	id: string,
	timezone?: any,
	yextDisplayCoordinate?: Coordinate,
}
