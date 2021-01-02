import React,{Component}from 'react';
import {createDrawerNavigator}from 'react-navigation-drawer';
import {AppTabNavigator}from './AppTabNavigator';
import {Sidebarmenu}from './sidebarMenu';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:AppTabNavigator}
    
}, 
    {contentComponent:Sidebarmenu},
    {initialRouteName:'Home'}
)