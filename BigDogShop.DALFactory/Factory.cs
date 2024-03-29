﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Configuration;
using System.Reflection;
using BigDogShop.IDAL;

namespace BigDogShop.DALFactory
{
    public class Facotry
    {
        public static string type = ConfigurationManager.AppSettings["FactoryType"];

        //利用反射创建对象
        public static IUser CreateUser()
        {
            return (IUser)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.User");
        }

        public static IProduct CreateProduct()
        {
            return (IProduct)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Product");
        }

        public static IAdvertisement CreateAdvertisement()
        {
            return (IAdvertisement)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Advertisement");
        }

        public static IMenu CreateMenu()
        {
            return (IMenu)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Menu");
        }

        public static IAdmin CreateAdmin()
        {
            return (IAdmin)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Admin");
        }
        public static IService CreateService()
        {
            return (IService)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Service");
        }

        public static ILink CreateLink()
        {
            return (ILink)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Link");
        }

        public static ICategory CreateCategory()
        {
            return (ICategory)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Category");
        }

        public static INews CreateNews()
        {
            return (INews)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.News");
        }

        public static IArticle CreateArticle()
        {
            return (IArticle)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Article");
        }

        public static IProductImages CreateProductImages()
        {
            return (IProductImages)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.ProductImages");
        }

        public static IRole CreateRole()
        {
            return (IRole)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Role");
        }
        public static IOperate CreateOperate()
        {
            return (IOperate)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Operate");
        }

        public static IRight CreateRight()
        {
            return (IRight)Assembly.Load("BigDogShop." + type + "DAL").CreateInstance("BigDogShop." + type + "DAL.Right");
        }
    }
}
