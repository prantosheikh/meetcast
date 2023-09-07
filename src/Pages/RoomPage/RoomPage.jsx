import React, { useContext } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { AuthContext } from "./../../Providers/AuthProvider";

const RoomPage = () => {
	const { roomID } = useParams();
	const { user } = useContext(AuthContext);

	const myMeetings = async (element) => {
		const appID = 2059610707;
		const serverSecret = "5692269139171731f75d087ec95f3344";
		const userID = Math.floor(Math.random() * 10000) + "";
		const userName = user.displayName;
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			roomID,
			userID,
			userName
		);

		const zp = ZegoUIKitPrebuilt.create(kitToken);
		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: "Copy link",
					url: `https://meetcast-f74c8.web.app/room/${roomID}`,
				},
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall,
				config: {
					role: "Host",
				},
			},
			showScreenSharingButton: true,
			showTurnOffRemoteMicrophoneButton: true,
			showRemoveUserButton: true,
			lowerLeftNotification: {
				showUserJoinAndLeave: true,
			},
			whiteboardConfig: {
				showAddImageButton: true,
				showCreateAndCloseButton: true,
			},
			turnOnMicrophoneWhenJoining: true,
		});
	};

	return (
		<div
			className="myCallContainer"
			ref={myMeetings}
			style={{ width: "100vw", height: "100vh" }}
		></div>
	);
};

export default RoomPage;