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

export interface ComplexVideo {
	url: string,
	video?: string,
	description?: string,
}

export default interface Youtube_video {
	description?: string,
	name: string,
	youtube_channelID?: string,
	c_primaryCTA?: C_primaryCTA,
	youtube_publishedAt?: string,
	c_secondaryCTA?: C_secondaryCTA,
	youtube_thumbnailPhoto?: Image,
	youtube_videoURL?: string,
	id: string,
	videos?: ComplexVideo[],
}
