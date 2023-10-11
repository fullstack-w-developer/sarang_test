"use client";
import Home from "@/app/page";
import { Dash, Home_icons, User_icon, Wallet_icon } from "@/components/icons/icons";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { BiLogoTelegram, BiMoney, BiSupport } from "react-icons/bi";
import { BsDiscord, BsFillCreditCardFill, BsTwitter } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export const sexPerson = [
    {
        value: "مرد",
        label: "مرد",
    },
    {
        value: "زن",
        label: "زن",
    },
];
export const optionYesOrNo = [
    {
        value: true,
        label: "بله",
    },
    {
        value: false,
        label: "خیر",
    },
];

export const menuUser = [
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/user/profile",
    },
    {
        name: "صحفه اصلی",
        icon: Home_icons,
        url: "/user",
    },
    {
        name: "تراکنش ",
        icon: Wallet_icon,
        url: "/user/transactions",
    },
];

export const menuDriver = [
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/driver/profile",
    },
    {
        name: "خانه",
        icon: Home_icons,
        url: "/driver",
    },
    {
        name: "تراکنش",
        icon: Wallet_icon,
        url: "/driver/transactions",
    },
];
export const counterList = [
    {
        name: "خانه",
        icon: Home_icons,
        url: "/counter",
    },
    {
        name: "تراکنش",
        icon: Wallet_icon,
        url: "/counter/transactions",
    },
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/counter/profile",
    },
];

export const PaymentTypeEnum = {
    USER_SCAN_QR_CODE: "اسکن QR کد",
    USER_SCAN_QR_PAYMENT_GATEWAY: "اسکن QR کد و پرداخت از طریق درگاه پرداخت",
    USER_DRIVER_CODE: "وارد کردن کد راننده",
    USER_DRIVER_CODE_PAYMENT_GATEWAY: "وارد کردن کد راننده و پرداخت از طریق درگاه پرداخت",
    DRIVER_USER_CODE: "وارد کردن کد مشتری",
    DRIVER_SCAN_USER_CARD: "اسکن کارت مشتری به وسیله راننده",
};

export const moreMenuUser = [
    {
        name: "سفر‌های من",
        icon: FaCar,
        url: "/user/trip",
    },
    {
        name: "شارژ حساب",
        icon: BiMoney,
        url: "/user/sharje",
    },
    // {
    //     name: "پشتیبانی",
    //     icon: BiSupport,
    //     url: "/user/support",
    // },
];
export const MoreMenuDriver = [
    {
        name: "سفر‌ها",
        icon: FaCar,
        url: "/driver/trip",
    },
];

export const social_media = [
    {
        icon: BiLogoTelegram,
        color: "#3390ec",
    },
    {
        icon: IoLogoWhatsapp,
        color: "#00a844",
    },
    {
        icon: BsTwitter,
        color: "#0096f5",
    },
    {
        icon: BsDiscord,
        color: "#626262",
    },
];

export const withdrawalRequestStatusEnum = {
    WAITING: "درحال انتظار",
    SUCCESS: "تسویه شده",
    FAILED: "ناموفق",
};

export const linksCounter = [
    {
        name: "شارژ با اسکن",
        url: "",
        icon: "",
    },
    {
        name: "شارژ با شماره سریال",
        url: "",
        icon: "",
    },
    {
        name: "مسدودی کارت",
        url: "",
        icon: "",
    },
    {
        name: "موجودی کاربر",
        url: "",
        icon: "",
    },
    {
        name: "کارت جدید",
        url: "",
        icon: "",
    },
];

export const headerTableUser = ["نام", "خانوادگی", "شماره تلفن", "تاریخ عضویت", "جنسیت", "موجودی"];

export const headerMenu = [
    {
        title: "صفحه اصلی",
        url: "",
    },
    {
        title: "آشنایی با پارک",
        url: "",
    },
    {
        title: "کنسرسیوم‌ها",
        url: "",
    },
    {
        title: "مراکز وابسته",
        url: "",
    },
    {
        title: "معرفی شرکت‌ها",
        url: "",
    },
    {
        title: "اطلاع رسانی‌ها",
        url: "",
    },
    {
        title: "فرم‌ها و آیین نامه",
        url: "",
    },
    {
        title: "سامانه ها",
        url: "",
    },
    {
        title: "ارتباط با ما",
        url: "",
    },
];

export const itemsRoute = [
    {
        name: "Name",
        title: "نام مسیر",
        type: "text",
    },
    {
        name: "Cost",
        title: "هزینه",
        type: "text",
    },
];
export const itemsCard = [
    {
        name: "Serial",
        title: "شماره سریال",
        type: "text",
    },
    {
        name: "Status",
        title: "وضعیت",
        type: "radio",
    },
];

export const columnsUsers: GridColDef[] = [
    {
        field: "id",
        headerName: "ردیف",
        valueGetter: (params: GridValueGetterParams) => `${1}`,
    },
    {
        field: "FirstName",
        headerName: "نام",
    },
    {
        field: "LastName",
        headerName: "نام خانوادگی",
    },
    {
        field: "Balance",
        headerName: "موجودی",
    },
    {
        field: "Phone",
        headerName: "موبایل",
    },
    {
        field: "createdAt",
        headerName: "تاریج ایجاد",
    },
    {
        field: "Sex",
        headerName: "جنسیت",
    },
];


export const tripsFackdata =[
    {
        _id: '64bba5da1bfe1213123f4cc7',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-22T09:48:10.203Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64bba5da1bfe1213123f4cc3',
          TransactionType: 'پرداخت کرایه',
          Status: 'موفق',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-22T09:48:10.170Z',
          __v: 0
        }
      },
      {
        _id: '64bba5d51bfe1213123f4cbb',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-22T09:48:05.829Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64bba5d51bfe1213123f4cb7',
          TransactionType: 'پرداخت کرایه',
          Status: 'موفق',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-22T09:48:05.819Z',
          __v: 0
        }
      },
      {
        _id: '64bba5be1bfe1213123f4caf',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 2,
        CreatedAt: '2023-07-22T09:47:42.188Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64bba5be1bfe1213123f4cab',
          TransactionType: 'پرداخت کرایه',
          Status: 'موفق',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-22T09:47:42.131Z',
          __v: 0
        }
      },
      {
        _id: '64bb9ed11bfe1213123f4c9b',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-22T09:18:09.701Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64bb9ed11bfe1213123f4c97',
          TransactionType: 'پرداخت کرایه',
          Status: 'موفق',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-22T09:18:09.528Z',
          __v: 0
        }
      },
      {
        _id: '64bb9ec31bfe1213123f4c8d',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-22T09:17:55.459Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64bb9ec31bfe1213123f4c89',
          TransactionType: 'پرداخت کرایه',
          Status: 'موفق',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-22T09:17:55.299Z',
          __v: 0
        }
      },
      {
        _id: '64b6450f972622ad7f6baca2',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-18T07:53:51.564Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b6450f972622ad7f6bac9e',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:53:51.541Z',
          __v: 0
        }
      },
      {
        _id: '64b644b9972622ad7f6bac77',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-18T07:52:25.074Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b644b9972622ad7f6bac73',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:52:25.066Z',
          __v: 0
        }
      },
      {
        _id: '64b644ad972622ad7f6bac6a',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-18T07:52:13.084Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b644ad972622ad7f6bac66',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:52:13.060Z',
          __v: 0
        }
      },
      {
        _id: '64b644a3972622ad7f6bac5d',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-18T07:52:03.257Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b644a3972622ad7f6bac59',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:52:03.245Z',
          __v: 0
        }
      },
      {
        _id: '64b64498972622ad7f6bac50',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-18T07:51:52.224Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b64498972622ad7f6bac4c',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:51:52.207Z',
          __v: 0
        }
      },
      {
        _id: '64b6448a972622ad7f6bac43',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-18T07:51:38.588Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b6448a972622ad7f6bac3f',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:51:38.555Z',
          __v: 0
        }
      },
      {
        _id: '64b63e87972622ad7f6babdd',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-18T07:25:59.252Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b63e87972622ad7f6babd9',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-18T07:25:59.236Z',
          __v: 0
        }
      },
      {
        _id: '64b531a213fa2a312ce46b47',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 2,
        CreatedAt: '2023-07-17T12:18:42.983Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b531a213fa2a312ce46b43',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:18:42.939Z',
          __v: 0
        }
      },
      {
        _id: '64b5301813fa2a312ce46b25',
        Route: { _id: '64b3da88142d3ac2e810f673', Name: 'گردشی', Cost: 0, __v: 0 },
        PaymentType: 'وارد کردن کد راننده',
        CreatedAt: '2023-07-17T12:12:08.892Z',
        car: {
          Plaque: [Object],
          Route: '64b3da88142d3ac2e810f673',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b5301813fa2a312ce46b21',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:12:08.879Z',
          __v: 0
        }
      },
      {
        _id: '64b52fea13fa2a312ce46b11',
        Route: { _id: '64b3da88142d3ac2e810f673', Name: 'گردشی', Cost: 0, __v: 0 },
        PaymentType: 'وارد کردن کد راننده',
        CreatedAt: '2023-07-17T12:11:22.607Z',
        car: {
          Plaque: [Object],
          Route: '64b3da88142d3ac2e810f673',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52fea13fa2a312ce46b0d',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 1223456,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:11:22.596Z',
          __v: 0
        }
      },
      {
        _id: '64b52fb513fa2a312ce46b00',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 2,
        CreatedAt: '2023-07-17T12:10:29.072Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52fb513fa2a312ce46afc',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:10:29.052Z',
          __v: 0
        }
      },
      {
        _id: '64b52f8613fa2a312ce46af0',
        Route: { _id: '64b3da88142d3ac2e810f673', Name: 'گردشی', Cost: 0, __v: 0 },
        PaymentType: 'وارد کردن کد راننده',
        CreatedAt: '2023-07-17T12:09:42.325Z',
        car: {
          Plaque: [Object],
          Route: '64b3da88142d3ac2e810f673',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52f8613fa2a312ce46aec',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:09:42.300Z',
          __v: 0
        }
      },
      {
        _id: '64b52f5a13fa2a312ce46ae3',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-17T12:08:58.209Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52f5a13fa2a312ce46adf',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:08:58.177Z',
          __v: 0
        }
      },
      {
        _id: '64b52f4613fa2a312ce46ad6',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-17T12:08:38.600Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52f4613fa2a312ce46ad2',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:08:38.579Z',
          __v: 0
        }
      },
      {
        _id: '64b52df313fa2a312ce46a91',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-17T12:02:59.717Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52df313fa2a312ce46a8d',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:02:59.701Z',
          __v: 0
        }
      },
      {
        _id: '64b52de413fa2a312ce46a83',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-17T12:02:44.431Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52de413fa2a312ce46a7f',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T12:02:44.419Z',
          __v: 0
        }
      },
      {
        _id: '64b52ce213fa2a312ce46a6d',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 4,
        CreatedAt: '2023-07-17T11:58:26.310Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b52ce213fa2a312ce46a69',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 20000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T11:58:26.292Z',
          __v: 0
        }
      },
      {
        _id: '64b505d913fa2a312ce46829',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-17T09:11:53.635Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b505d913fa2a312ce46825',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T09:11:53.614Z',
          __v: 0
        }
      },
      {
        _id: '64b4e88813fa2a312ce467d1',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 2,
        CreatedAt: '2023-07-17T07:06:48.458Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b4e88813fa2a312ce467cd',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T07:06:48.443Z',
          __v: 0
        }
      },
      {
        _id: '64b4e6ed13fa2a312ce467a8',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 2,
        CreatedAt: '2023-07-17T06:59:57.796Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b4e6ed13fa2a312ce467a4',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T06:59:57.757Z',
          __v: 0
        }
      },
      {
        _id: '64b4e11b345a822afbc6da42',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد مشتری',
        NumberOfPassengers: 2,
        CreatedAt: '2023-07-17T06:35:07.313Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b4e11b345a822afbc6da3e',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 10000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-17T06:35:07.281Z',
          __v: 0
        }
      },
      {
        _id: '64b3cf0e142d3ac2e810f623',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-16T11:05:50.656Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3cf0e142d3ac2e810f61f',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T11:05:50.596Z',
          __v: 0
        }
      },
      {
        _id: '64b3a3541c22b7adc63e1e3c',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-16T07:59:16.914Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a3541c22b7adc63e1e38',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:59:16.843Z',
          __v: 0
        }
      },
      {
        _id: '64b3a2f41c22b7adc63e1e29',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-16T07:57:40.838Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a2f41c22b7adc63e1e25',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:57:40.817Z',
          __v: 0
        }
      },
      {
        _id: '64b3a2b81c22b7adc63e1e1a',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-16T07:56:40.732Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a2b81c22b7adc63e1e16',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:56:40.711Z',
          __v: 0
        }
      },
      {
        _id: '64b3a2191c22b7adc63e1dff',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 4,
        CreatedAt: '2023-07-16T07:54:01.177Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a2191c22b7adc63e1dfb',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 20000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:54:01.132Z',
          __v: 0
        }
      },
      {
        _id: '64b3a1d91c22b7adc63e1df2',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 4,
        CreatedAt: '2023-07-16T07:52:57.894Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a1d91c22b7adc63e1dee',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 20000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:52:57.850Z',
          __v: 0
        }
      },
      {
        _id: '64b3a14d1c22b7adc63e1ddd',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'اسکن QR کد',
        NumberOfPassengers: 1,
        CreatedAt: '2023-07-16T07:50:37.708Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a14d1c22b7adc63e1dd9',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 5000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:50:37.692Z',
          __v: 0
        }
      },
      {
        _id: '64b3a1341c22b7adc63e1dd0',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-16T07:50:12.521Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b3a1341c22b7adc63e1dcc',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T07:50:12.467Z',
          __v: 0
        }
      },
      {
        _id: '64b390a96465d8accb065ead',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 3,
        CreatedAt: '2023-07-16T06:39:37.231Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b390a96465d8accb065ea9',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 15000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T06:39:37.215Z',
          __v: 0
        }
      },
      {
        _id: '64b390366465d8accb065e9c',
        Route: {
          _id: '64b28c91dcd0943a3d3b3782',
          Name: 'طالقانی به شهرک',
          Cost: 5000,
          __v: 0
        },
        PaymentType: 'وارد کردن کد راننده',
        NumberOfPassengers: 4,
        CreatedAt: '2023-07-16T06:37:42.141Z',
        car: {
          Plaque: [Object],
          Route: '64b28c91dcd0943a3d3b3782',
          Type: 'پراید',
          __v: 0
        },
        UserTransaction: {
          _id: '64b390366465d8accb065e98',
          TransactionType: 'پرداخت کرایه',
          From: '64b28ef2dcd0943a3d3b37a3',
          Amount: 20000,
          MadeBy: 'کاربر',
          Description: '',
          createdAt: '2023-07-16T06:37:42.085Z',
          __v: 0
        }
      }
]