// @import dependencies
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import { useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// // @import json
// import cookieConstants from "../../constants/cookieConstants";
// import routeConstants from "../../constants/routeConstants";
// import generalConstants from "../../constants/generalConstants";

// // @import components
// import CommonBtn1 from "../generalComponents/CommonBtn1";
// import CommonModal from "../generalComponents/CommonModal";
// import Pager from "../generalComponents/Pager";
// import { TabItem, Slider } from "../generalComponents/TabStyle";

// //@import Utils
// import { apiList, invokeApi } from "../../utills/apiService";
// import { config } from "../../utills/configUtils";
// import apiConstants from "../../constants/apiConstants"
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate();
    const tabListRef = useRef();
    const [cookies, setCookie] = useCookies();
    // const { data: currentUser } = useSelector((state) => state.currentUser);

    // State variables
    const [value, setValue] = useState(0);
    const childRefs = useRef(new Map());
    const [slider, setSlider] = useState({ left: 0, right: 0 });

    const [isDropdownModalOpen, setIsDropdownModalOpen] = useState(false);
    const [isNotificationModalopen, setIsNotificationModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [searchUser, setSearchUser] = useState("");
    const [recentListData, setRecentListData] = useState(null);
    const [invokeRecentListData, setInvokeRecentListData] = useState(true);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [skip, setSkip] = useState(0);

    const [searchListData, setSearchListData] = useState(null);
    const [invokeSearchListData, setInvokeSearchListData] = useState(true);

    // const tabs = [generalConstants.GENERAL, generalConstants.FOLLOWREQUEST];

    // update recent search list
    // const updateRecentSearchList = async (id, typeStatus) => {
    //     let params = {
    //         matchId: id,
    //         type: typeStatus,
    //     };
    //     const response = await invokeApi(
    //         config.baseUrl + apiList.updateRecentSearchList,
    //         params,
    //         cookies
    //     );
    //     if (response.customcode === 200) {
    //         setSearchUser("");
    //         if (typeStatus === "ADD") {
    //             navigate(routeConstants.NAVIGATEPROFILE);
    //             setIsDropdownModalOpen(false);
    //         }
    //         setInvokeRecentListData(true);
    //     } else if (response.customcode === 201) {
    //         navigate(routeConstants.NAVIGATELOGOUT);
    //     } else {
    //         toast.error("Something went wrong");
    //     }
    // };

    // measure our elements
    useEffect(() => {
        if (isNotificationModalopen) {
            const target = childRefs.current.get(value);
            const container = tabListRef.current;
            if (target) {
                const cRect = container.getBoundingClientRect();

                // when container is `display: none`, width === 0.
                // ignore this case
                if (cRect.width === 0) {
                    return;
                }

                const tRect = target.getBoundingClientRect();
                const left = tRect.left - cRect.left;
                const right = cRect.right - tRect.right;

                setSlider({
                    hasValue: true,
                    left: left + 8,
                    right: right + 8,
                });
            }
        }
    }, [value, isNotificationModalopen]);

    // //get Recent data
    // useEffect(() => {
    //     const getRecentSearchList = async () => {
    //         // setIsLoading(true);
    //         let params = { skip, limit: 10, search: "" };
    //         const controller = new AbortController();
    //         const { signal } = controller;
    //         const response = await invokeApi(
    //             config.baseUrl + apiList.getRecentSearchList,
    //             params,
    //             cookies,
    //             { signal }
    //         );
    //         if (response.customcode === 200) {
    //             // if (response.data.length < 10) {
    //             //   setMaxDistReached(true);
    //             // } else {
    //             //   setMaxDistReached(false);
    //             // }
    //             // if (selectedgameData?.length > 0) {
    //             //   for (let i = 0; i < selectedgameData?.length; i++) {
    //             //     for (let j = 0; j < response.data.length; j++) {
    //             //       if (selectedgameData[i].gameName === response.data[j].gameName) {
    //             //         response.data.splice(j, 1);
    //             //       }
    //             //     }
    //             //   }
    //             // }
    //             // if (skip > 0) {
    //             //   setGameSearchData((prev) => [...prev, ...response.data]);
    //             // } else {
    //             setRecentListData(response.data);
    //             // }
    //             // setIsLoading(false);
    //         } else if (response.customcode === 201) {
    //             navigate(routeConstants.NAVIGATELOGOUT);
    //         } else {
    //             toast.error("Something went wrong");
    //         }

    //         // UseEffect abort on unmount for cleanup
    //         return () => {
    //             controller.abort();
    //         };
    //     };
    //     if (isDropdownModalOpen && invokeRecentListData) {
    //         setInvokeRecentListData(false);
    //         getRecentSearchList();
    //     }
    // }, [cookies, invokeRecentListData, isDropdownModalOpen, navigate, skip]);

    //get search game
    // useEffect(() => {
    //     const getSearchList = async () => {
    //         setIsSearchLoading(true);
    //         let params = { skip, limit: 10, search: searchUser };
    //         const controller = new AbortController();
    //         const { signal } = controller;
    //         const response = await invokeApi(
    //             config.baseUrl + apiList.getSearchList,
    //             params,
    //             cookies,
    //             { signal }
    //         );
    //         if (response.customcode === 200) {
    //             // if (response.data.length < 10) {
    //             //   setMaxDistReached(true);
    //             // } else {
    //             //   setMaxDistReached(false);
    //             // }
    //             // if (selectedgameData?.length > 0) {
    //             //   for (let i = 0; i < selectedgameData?.length; i++) {
    //             //     for (let j = 0; j < response.data.length; j++) {
    //             //       if (selectedgameData[i].gameName === response.data[j].gameName) {
    //             //         response.data.splice(j, 1);
    //             //       }
    //             //     }
    //             //   }
    //             // }
    //             // if (skip > 0) {
    //             //   setGameSearchData((prev) => [...prev, ...response.data]);
    //             // } else {
    //             setSearchListData(response.data);
    //             let timer = setTimeout(() => setIsSearchLoading(false), 1000);
    //             return () => clearTimeout(timer);
    //             // }
    //             // setIsLoading(false);
    //         } else if (response.customcode === 201) {
    //             navigate(routeConstants.NAVIGATELOGOUT);
    //         } else {
    //             setIsSearchLoading(false);
    //             toast.error("Something went wrong");
    //         }

    //         // UseEffect abort on unmount for cleanup
    //         return () => {
    //             controller.abort();
    //         };
    //     };
    //     if (isDropdownModalOpen && invokeSearchListData && searchUser.length >= 1) {
    //         setInvokeSearchListData(false);
    //         getSearchList();
    //     }
    // }, [
    //     cookies,
    //     invokeSearchListData,
    //     isDropdownModalOpen,
    //     navigate,
    //     searchUser,
    //     skip,
    // ]);

    // FeedBack API
    // const handleGiveFeedback = async () => {
    //     try {
    //         const response = await invokeApi(
    //             config.baseUrl + apiConstants.giveFeedback,
    //             {},
    //             cookies
    //         );
    //         if (response.status === "success") {
    //             if (response.customcode === 200) {
    //                 toast.success("Account Terminated successfully!");
    //             } else {
    //                 toast.error("Feedback sended Succesfully");
    //             }
    //         } else {
    //             toast.error("Failed to send Feedback");
    //         }
    //     } catch (error) {
    //         toast.error("Failed to send Feedback");
    //     }
    // };

    return (
        <>
            <div
                onClick={() => {
                    setIsNotificationModalOpen(false);
                    setIsProfileModalOpen(false);
                }}
                className="gradient-border z-10 border-b-[2px] fixed top-0 left-0  flex flex-row items-center justify-between w-full h-[60px] bg-[#141517] py-3 px-10"
            >
                {/* Logo */}
                <div
                    className="cursor-pointer"
                >
                    <img className="h-8 w-8" src="/assets/svg/gb-logo.svg" />
                </div>
                {/* Search and add icons*/}
                <div className="flex flex-row gap-[12px] w-[616px] h-8 ms-[246px]">
                    {/* search bar */}
                    <div
                        style={{
                            boxShadow: isDropdownModalOpen
                                ? "0px 0px 8px 2px #2A85FF99"
                                : "0px 8px 64px 0px #0000001A",
                            width: isDropdownModalOpen ? "616px" : "532px",
                        }}
                        className={`${isDropdownModalOpen ? "border-typo-blue border-[2px]" : ""
                            } flex flex-row h-9 bg-[#2B2E30] space-x-5 items-center py-2.5 px-6  rounded-[18px]`}
                    >
                        <img className="h-5 w-5" src="/assets/svg/search-icon.svg" />
                        <input
                            className="outline-none bg-transparent w-full text-typo-secondary"
                            onFocus={() => {
                                setIsDropdownModalOpen(true);
                            }}
                            value={searchUser}
                            onChange={(ev) => {
                                setSearchUser(ev.target.value);
                                if (ev.target.value.length > 0) {
                                    setInvokeSearchListData(true);
                                }
                            }}
                        />
                    </div>
                    {/* add icon */}
                    {!isDropdownModalOpen && (
                        <div
                            className="h-9 flex items-center justify-center w-[72px] rounded-[18px] bg-[#2B2E30] py-2 px-4 cursor-pointer"
                        >
                            <img className="h-5 w-5" src="/assets/svg/plus.svg" />
                        </div>
                    )}
                </div>

                {/* Right Icons */}
                <div className="flex flex-row items-center justify-end w-[224px] h-9 gap-[32px]">
                    <div className="w-[160px] flex flex-row items-center justify-end gap-[24px]">
                        {/* <div className="h-8 w-8 bg-[#2B2E30] rounded-full flex items-center justify-center">
              <img
                className="h-[18px] w-[18px]"
                src="/assets/svg/comment-white.svg"
              />
            </div>
            <div className="h-8 w-8 bg-[#2B2E30] rounded-full flex items-center justify-center">
              <img
                className="h-[18px] w-[18px]"
                src="/assets/svg/group-white.svg"
              />
            </div> */}
                        <div
                            onClick={(ev) => {
                                ev.stopPropagation();
                                setIsNotificationModalOpen(!isNotificationModalopen);
                                setIsProfileModalOpen(false);
                            }}
                            style={{
                                boxShadow: isNotificationModalopen
                                    ? "0px 0px 8px 2px #2A85FF99"
                                    : "0px 8px 64px 0px #0000001A",
                            }}
                            className={`h-8 w-8 bg-[#2B2E30] ${isNotificationModalopen ? "border-[2px] border-typo-blue" : ""
                                } rounded-full flex items-center justify-center cursor-pointer`}
                        >
                            <img
                                className="h-[18px] w-[18px]"
                                src="/assets/svg/notification-white.svg"
                            />
                        </div>
                        {/* Profile avatar */}
                        <div
                            onClick={(ev) => {
                                ev.stopPropagation();
                                setIsProfileModalOpen(!isProfileModalOpen);
                                setIsNotificationModalOpen(false);
                            }}
                            style={{
                                boxShadow: isProfileModalOpen
                                    ? "0px 0px 8px 2px #2A85FF99"
                                    : "0px 8px 64px 0px #0000001A",
                            }}
                            className={` bg-[#2B2E30] ${isProfileModalOpen ? "border-[2px] border-typo-blue" : ""
                                } rounded-full flex items-center justify-center cursor-pointer`}
                        >
                            {/* <img src={currentUser?.profilePic} className=" h-[40px] w-[40px] rounded-[50px]" /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Search modal open */}
            {isDropdownModalOpen && (
                <div
                    onClick={() => {
                        setIsDropdownModalOpen(false);
                    }}
                    className="fixed z-10 bg-opacity-[60%] backdrop-blur-3xl bg-black inset-0 flex justify-center items-start mt-[60px]"
                >
                    <div
                        onClick={(ev) => ev.stopPropagation()}
                        className="flex flex-col rounded-[16px] bg-gradient-to-tl from-[#252525] from-[70%] to-gray-600 mt-4 ms-[49px]"
                    >
                        <div className="w-[616px] h-[324px] flex flex-col bg-[#252525]  bg-opacity-[100%]  rounded-[16px] mt-[1px] ml-[1px] gap-[16px] bg-no-repeat">
                            {searchUser.length > 0 ? (
                                <div className="flex flex-col h-full overflow-y-scroll py-[12px]">
                                    {/* render */}
                                    {searchListData?.length > 0 ? (
                                        <>
                                            {searchListData?.map((el, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex flex-row items-center hover:bg-[#2B2E30] rounded-[8px] justify-between cursor-pointer px-[24px] py-[12px]"
                                                >
                                                    <div className="flex flex-row items-center gap-[12px]">
                                                        {isSearchLoading ? (
                                                            <SkeletonTheme
                                                                baseColor="#2B2E30"
                                                                highlightColor="#141517"
                                                                duration={3}
                                                            >
                                                                <Skeleton className="h-8 w-8 rounded-full" />
                                                            </SkeletonTheme>
                                                        ) : (
                                                            <img
                                                                src={el.profilePic}
                                                                className="h-8 w-8 rounded-full"
                                                            />
                                                        )}
                                                        {isSearchLoading ? (
                                                            <SkeletonTheme
                                                                baseColor="#2B2E30"
                                                                highlightColor="#141517"
                                                                duration={3}
                                                            >
                                                                <Skeleton className="h-10 w-20" />
                                                            </SkeletonTheme>
                                                        ) : (
                                                            <h5 className="text-[14px] font-normal text-typo-secondary">
                                                                {el.userName}
                                                            </h5>
                                                        )}
                                                    </div>

                                                    {isSearchLoading ? (
                                                        <SkeletonTheme
                                                            baseColor="#2B2E30"
                                                            highlightColor="#141517"
                                                            duration={3}
                                                        >
                                                            <Skeleton className="h-4 w-8 px-2  rounded-lg" />
                                                        </SkeletonTheme>
                                                    ) : (
                                                        <button className="text-sm text-typo-secondary font-normal py-[3px] outline-none bg-typo-blue px-2  rounded-lg">
                                                            Profile
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <div className="h-full w-full flex items-center justify-center">
                                            <h5 className="text-sm font-semibold text-typo-light">
                                                No results found.
                                            </h5>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex flex-col px-[24px] py-[24px] gap-[20px]">
                                    <div className="flex flex-row items-center justify-between">
                                        <h5 className="text-[14px] font-semibold text-typo-secondary">
                                            Recent
                                        </h5>
                                        {recentListData?.length > 0 && (
                                            <h5
                                                className="text-[14px] font-semibold text-typo-blue cursor-pointer"
                                            >
                                                Clear All
                                            </h5>
                                        )}
                                    </div>
                                    <div className="flex flex-col h-[240px] overflow-y-scroll">
                                        {/* render */}
                                        {recentListData?.length > 0 ? (
                                            <>
                                                {recentListData?.map((el, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex flex-row items-center py-[12px] justify-between cursor-pointer"
                                                    >
                                                        <div                                                        
                                                            className="flex flex-row items-center gap-[12px]"
                                                        >
                                                            <img
                                                                src={el.profilePic}
                                                                className="h-8 w-8 rounded-full"
                                                            />
                                                            <h5 className="text-[14px] font-normal text-typo-secondary">
                                                                {el.userName}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="h-full w-full flex items-center justify-center">
                                                <h5 className="text-sm font-semibold text-typo-light">
                                                    No recent searches.
                                                </h5>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {isNotificationModalopen && (
                <div
                    className="fixed z-10 bg-opacity-[10%] bg-black inset-0 flex justify-end items-start mt-[60px]"
                    onClick={() => {
                        setIsNotificationModalOpen(false);
                    }}
                >
                    <div className="bg-gradient-to-tl from-[#252525] me-[30px] from-[70%] to-gray-600 rounded-[16px] mt-3">
                        <div className="bg-[#252525] bg-opacity-[100%] ml-[1px] mt-[1px]  rounded-[16px]">
                            <div className="flex flex-col rounded-[16px]  bg-no-repeat bg-cover bg-center">
                                <div className="w-[460px] h-[600px] flex flex-col">
                                    {/* Tabs */}
                                    <div
                                        className="relative border-line2 w-[430px] mt-[10px] px-[12px]"
                                        ref={tabListRef}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isProfileModalOpen && (
                <div
                    onClick={() => setIsProfileModalOpen(false)}
                    className="fixed z-10 inset-0 bg-opacity-[10%]  bg-black flex justify-end items-start mt-[60px]"
                >
                    <div className="bg-gradient-to-tl from-[#252525] me-[30px] from-[70%] to-gray-600 rounded-[16px] mt-3">
                        <div className="bg-[#252525] bg-opacity-[100%] ml-[1px] mt-[1px]  rounded-[16px]">
                            <div className="flex flex-col rounded-[16px] bg-no-repeat bg-cover bg-center">
                                <div className="w-[274px] h-[426px] flex flex-col py-[12px] px-[8px]">
                                    {/* Avatar and Name name */}
                                    <div
                                        className="flex flex-row w-full h-[70px] items-center cursor-pointer hover:bg-[#2B2E30] py-[12px] px-[16px] gap-4 border-b-[1px] border-[#373A3D] rounded-lg mb-[2px]"
                                    >
                                        {/* <img
                                            src={currentUser?.profilePic}
                                            className="w-10 h-10 rounded-full"
                                        /> */}
                                        <div className="flex flex-col items-start gap-[4px]">
                                            {/* <h5 className="typo-semibold">{currentUser?.name}</h5>
                                            <h5 className="typo-normal">@{currentUser?.userName}</h5> */}
                                        </div>
                                    </div>

                                    {/* Web download */}
                                    {/* <div className="w-full h-[48px] bg-no-repeat bg-cover bg-center rounded-lg mb-2"></div> */}

                                    {/* nav buttons */}
                                    <div className="flex flex-col w-full h-[320px] gap-[2px] cursor-pointer">
                                        <div
                                            className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                                        >
                                            <img
                                                src="/assets/svg/themesIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Themes
                                            </h5>
                                        </div>
                                        <div
                                            className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                                        >
                                            <img
                                                src="/assets/svg/walletIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Wallets
                                            </h5>
                                        </div>
                                        {/* <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                      <img
                        src="/assets/svg/dashboardIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Dashboard
                      </h5>
                    </div> */}
                                        <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                                            <img
                                                src="/assets/svg/heartIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Saved
                                            </h5>
                                        </div>
                                        <div
                                            className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                                        >
                                            <img
                                                src="/assets/svg/draftIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Draft
                                            </h5>
                                        </div>
                                        <div
                                            onClick={() => setIsFeedbackModalOpen(true)}
                                            className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                                        >
                                            <img
                                                src="/assets/svg/feedbackIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Give Feedback
                                            </h5>
                                        </div>
                                        <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                                            <img
                                                src="/assets/svg/helpAndSupport.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Help Center
                                            </h5>
                                        </div>
                                        <div
                                            className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                                        >
                                            <img
                                                src="/assets/svg/settingsIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Settings
                                            </h5>
                                        </div>
                                        <div
                                            className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                                        >
                                            <img
                                                src="/assets/svg/logoutIcon.svg"
                                                className="h-6 w-6"
                                            />
                                            <h5 className="text-[14px] font-semibold text-typo-secondary">
                                                Logout
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Header;