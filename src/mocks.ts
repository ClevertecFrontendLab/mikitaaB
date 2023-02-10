import facebook from './assets/logo/facebook.png';
import instagram from './assets/logo/instagram.png';
import linkedin from './assets/logo/linkedin.png';
import vk from './assets/logo/vk.png';
import grokkingAlgo from './assets/image/grokkingAlgo.png';
import anotherBookImage from './assets/image/anotherBookImage.png';
import reviewUser from './assets/image/reviewUser.png';

export const logoIcons = [{
    'id': 0,
    'src': facebook,
    'alt': 'facebook',
    'link': 'https://facebook.com'
}, {
    'id': 1,
    'src': instagram,
    'alt': 'instagram',
    'link': 'https://instagram.com'
}, {
    'id': 2,
    'src': vk,
    'alt': 'vk',
    'link': 'https://vk.com'
}, {
    'id': 3,
    'src': linkedin,
    'alt': 'linkedin',
    'link': 'https://linkedin.com'
}];

export const booksCategoryItems = [{
    'id': '0',
    'category': 'all',
    'name': 'Все книги',
    'route': '/books/all'
}, {
    'id': '1',
    'category': 'business',
    'name': 'Бизнес-книги',
    'route': '/books/business',
    'count': 14
}, {
    'id': '2',
    'category': 'detective',
    'name': 'Детективы',
    'route': '/books/detective',
    'count': 8
}, {
    'id': '3',
    'category': 'children',
    'name': 'Детские книги',
    'route': '/books/children',
    'count': 14
}, {
    'id': '4',
    'category': 'foreign',
    'name': 'Зарубежная литература',
    'route': '/books/foreign',
    'count': 2
}, {
    'id': '5',
    'category': 'history',
    'name': 'История',
    'route': '/books/history',
    'count': 5
}, {
    'id': '6',
    'category': 'classic',
    'name': 'Классическая литература',
    'route': '/books/classic',
    'count': 12
}, {
    'id': '7',
    'category': 'psychology',
    'name': 'Книги по психологии',
    'route': '/books/psychology',
    'count': 11
}, {
    'id': '8',
    'category': 'computer',
    'name': 'Компьютерная литература',
    'route': '/books/computer',
    'count': 54
}, {
    'id': '9',
    'category': 'art',
    'name': 'Культура и искусство',
    'route': '/books/art',
    'count': 5
}, {
    'id': '10',
    'category': 'science',
    'name': 'Наука и образование',
    'route': '/books/science',
    'count': 2
}, {
    'id': '11',
    'category': 'journal',
    'name': 'Публицистическая литература',
    'route': '/books/journal',
    'count': 0
}, {
    'id': '12',
    'category': 'manual',
    'name': 'Справочники',
    'route': '/books/manual',
    'count': 10
}, {
    'id': '13',
    'category': 'fantasy',
    'name': 'Фантастика',
    'route': '/books/fantasy',
    'count': 12
}, {
    'id': '14',
    'category': 'humour',
    'name': 'Юмористическая литература',
    'route': '/books/humour',
    'count': 8
}];

export const booksData = [
    {
        'id': '0',
        'image': [],
        'category': 'business',
        'author': 'Catherine Case',
        'title': 'Covert Street, Bonanza, Washington',
        'rating': 3,
        'year': 1972,
        'isBooked': false,
        'bookedTill': ''
    },
    {
        'id': '1',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            }
        ],
        'category': 'business',
        'author': 'Lenore Delaney',
        'title': 'Losee Terrace, Winfred, Louisiana',
        'rating': 5,
        'year': 1998,
        'isBooked': false,
        'bookedTill': ''
    },
    {
        'id': '2',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            },
            {
                'id': 1,
                'src': anotherBookImage
            },
            {
                'id': 2,
                'src': grokkingAlgo
            }
        ],
        'category': 'detective',
        'author': '',
        'title': 'Sedgwick Street, Collins, Northern Mariana Islands',
        'rating': 4,
        'year': 1925,
        'isBooked': false,
        'bookedTill': ''
    },
    {
        'id': '3',
        'image': [],
        'category': 'children',
        'author': 'Jessie Nunez',
        'title': 'Stockton Street, Vivian, Missouri',
        'rating': 1,
        'year': 1970,
        'isBooked': false,
        'bookedTill': ''
    },
    {
        'id': '4',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            }
        ],
        'category': 'foreign',
        'author': 'Lana Ray',
        'title': 'India Street, Ellerslie, Illinois',
        'rating': 0,
        'year': 1933,
        'isBooked': true,
        'bookedTill': '2023-10-25T11:27:42'
    },
    {
        'id': '5',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            },
            {
                'id': 1,
                'src': anotherBookImage
            }
        ],
        'category': 'history',
        'author': 'Caitlin Adams',
        'title': 'Poly Place, Como, Northern Mariana Islands',
        'rating': 5,
        'year': 1903,
        'isBooked': true,
        'bookedTill': '2023-08-18T07:28:13'
    },
    {
        'id': '6',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            }
        ],
        'category': 'classic',
        'author': 'Obrien Atkinson',
        'title': 'Degraw Street, Gulf, Virginia',
        'rating': 3,
        'year': 2021,
        'isBooked': false,
        'bookedTill': '2023-08-09T07:50:26'
    },
    {
        'id': '7',
        'image': [],
        'category': 'psychology',
        'author': 'Abbott Merritt',
        'title': 'Beverly Road, Villarreal, Alabama',
        'rating': 0,
        'year': 1907,
        'isBooked': false,
        'bookedTill': ''
    },
    {
        'id': '8',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            },
            {
                'id': 1,
                'src': anotherBookImage
            }
        ],
        'category': 'computers',
        'author': 'Clemons Guthrie',
        'title': 'Montieth Street, Bartonsville, Wyoming',
        'rating': 2,
        'year': 2022,
        'isBooked': false,
        'bookedTill': '2024-08-19T08:55:48'
    },
    {
        'id': '9',
        'image': [
            {
                'id': 0,
                'src': grokkingAlgo
            },
            {
                'id': 1,
                'src': anotherBookImage
            },
            {
                'id': 2,
                'src': grokkingAlgo
            }
        ],
        'category': 'culture',
        'author': 'Powers Harrell',
        'title': 'Division Avenue, Cleary, Connecticut',
        'rating': 4,
        'year': 1958,
        'isBooked': false,
        'bookedTill': '2023-10-05T07:48:25'
    }
];

export const detailsInfoTemplate = {
    'publishingHouse': 'Питер',
    'year': 2019,
    'pages': 288,
    'binding': 'Мягкая обложка',
    'size': '70x100',
    'genre': 'Компьютерная литература',
    'weight': '370 г',
    'isbn': '978-5-4461-0923-4',
    'manufacturer': 'ООО \'Питер Мейл\'. РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29'
};
export const reviewDataTemplate = [
    {
        'id': 0,
        'userPhoto': reviewUser,
        'userName': 'Иван Иванов',
        'date': '5 января 2019',
        'rating': 4,
        'text': null
    },
    {
        'id': 1,
        'userPhoto': reviewUser,
        'userName': 'Николай Качков',
        'date': '20 июня 2018',
        'rating': 4,
        'text': 'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
    },
    {
        'id': 2,
        'userPhoto': reviewUser,
        'userName': 'Екатерина Беляева',
        'date': '18 февраля 2018',
        'rating': 4,
        'text': null
    }
];