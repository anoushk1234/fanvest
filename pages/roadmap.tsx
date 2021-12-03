import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { NextPage } from "next";
import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Image,
  Link as ChakraLink,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
const Roadmap: NextPage = () => {
  return (
    <>
      {/* <style jsx>{`
        .transitionStep {
          filter: grayscale(1);
        }

        .transitionStep.accomplished {
          filter: grayscale(0);
        }
      `}</style>

      <ProgressBar
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        percent={75}
      >
        <Step transition="scale">
          {({ accomplished, index }: any) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              🌑
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }: any) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              🌒
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }: any) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              🌓
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }: any) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              🌔
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }: any) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              🌕
            </div>
          )}
        </Step>
      </ProgressBar> */}
    </>
  );
};

export default Roadmap;
