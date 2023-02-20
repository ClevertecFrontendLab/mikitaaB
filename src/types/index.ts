export type StatusType = 'idle' | 'loading' | 'resolved' | 'failed';

export type CategoryType = {
    name: string,
    path: string,
    id: number,
    count: number
}

export type CategoriesStateType = {
    categories: CategoryType[],
    status: StatusType
}

export type ImageType = {
    id?: number;
    url: string
}

export type BookingType = {
    id: number,
    order: boolean,
    dateOrder: string,
    customerId: number,
    customerFirstName: string,
    customerLastName: string
}

export type DeliveryType = {
    id: number,
    handed: boolean,
    dateHandedFrom: string,
    dateHandedTo: string,
    recipientId: number,
    recipientFirstName: string,
    recipientLastName: string
}

type HistoryType = {
    id: number,
    userId: number
}

export interface BookInterface {
    issueYear: string,
    rating: number | null,
    title: string,
    authors: string[],
    image: ImageType | null,
    categories: string[],
    id: number,
    booking: BookingType | null,
    delivery: DeliveryType | null,
    histories: HistoryType[] | null,
}

export type CommentsType = {
    id: number,
    rating: number,
    text: string,
    createdAt: string,
    user: UserType
}

type UserType = {
    commentUserId: number,
    firstName: string,
    lastName: string,
    avatarUrl: string
}

type ImagesType = {
    url: string
}

export interface BookDetailType extends Omit<BookInterface, 'image'> {
    description: string,
    publish: string,
    pages: string,
    cover: string,
    weight: string,
    format: string,
    ISBN: string,
    producer: string,
    images: ImagesType[],
    comments: CommentsType[] | null
}

export type BooksStateType = {
    books: BookInterface[],
    status: StatusType
}

export type BookDetailStateType = {
    book: BookDetailType | null,
    status: StatusType
}