"use client"
import React from 'react';
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from '../components/CustomCursor';


export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, [])

  return (
    <>
      <CustomCursor/>
    </>
  )
}