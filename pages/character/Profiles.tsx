import Image from "next/image";
import styled from "styled-components";
import { ListTitle } from "../../components/atoms/ListTItle";
import { SubTitle } from "../../components/atoms/SubTitle";
import { color } from "../../styles/theme";

const Profiles = ({ profiles, equipment, collectibles }: any) => {
	const {
		CharacterClassName,
		CharacterImage,
		CharacterLevel,
		CharacterName,
		ExpeditionLevel,
		GuildMemberGrade,
		GuildName,
		ItemAvgLevel,
		ItemMaxLevel,
		PvpGradeName,
		ServerName,
		Stats,
		Tendencies,
		Title,
		TotalSkillPoint,
		TownLevel,
		TownName,
		UsingSkillPoint,
	}: any = profiles;

	return (
		<ProfilesSection>
			<h3>{CharacterName}</h3>

			<EquipmentSection>
				<ul>
					{equipment?.slice(0, 6)?.map((item: any) => (
						<li key={item.Name}>
							{/* <div dangerouslySetInnerHTML={{ __html: item.Tooltip }}></div> */}
							<Image
								src={item.Icon}
								width="50"
								height="50"
								alt={"profile"}
								unoptimized={true}
							/>
						</li>
					))}
				</ul>

				<Image
					src={CharacterImage}
					width="303.73"
					height="258.81"
					alt={"profile"}
					unoptimized={true}
				/>

				<ul>
					{equipment?.slice(6, equipment.length - 1).map((item: any) => (
						<li key={item.Name}>
							{/* <div dangerouslySetInnerHTML={{ __html: item.Tooltip }}></div> */}
							<Image
								src={item.Icon}
								width="50"
								height="50"
								alt={"profile"}
								unoptimized={true}
							/>
						</li>
					))}
				</ul>
			</EquipmentSection>

			<StatusSection>
				<ul>
					<ListTitle>캐릭터</ListTitle>

					<li>
						<SubTitle>클래스</SubTitle> {CharacterClassName}
					</li>
					<li>
						<SubTitle>원정대</SubTitle>
						{ExpeditionLevel}
					</li>
					<li>
						<SubTitle>길드</SubTitle>
						{GuildName}
					</li>
					<li>
						<SubTitle>아이템</SubTitle>
						{ItemMaxLevel}
					</li>
					<li>
						<SubTitle>PVP</SubTitle>
						{PvpGradeName}
					</li>
					<li>
						<SubTitle>서버</SubTitle>
						{ServerName}
					</li>
					<li>
						<SubTitle>칭호</SubTitle>
						{Title}
					</li>
					<li>
						<SubTitle>영지</SubTitle>
						Lv.{TownLevel} {TownName}
					</li>
				</ul>

				<ul>
					<ListTitle>전투 특성</ListTitle>

					{Stats?.map((stat: any) => (
						<li key={stat.Type}>
							<SubTitle>{stat.Type}</SubTitle>
							<span>{stat.Value}</span>
						</li>
					))}
				</ul>

				<ul>
					<ListTitle>성향</ListTitle>

					{Tendencies?.map((tendency: any) => (
						<li key={tendency.Type}>
							<SubTitle>{tendency.Type}</SubTitle>
							<span>{tendency.Point}</span>
						</li>
					))}
				</ul>
			</StatusSection>
		</ProfilesSection>
	);
};

const ProfilesSection = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background: ${color.gray};
	border-radius: 14px;
	color: ${color.white};
	padding: 1rem;

	ul {
		margin: 0;
		padding: 0;
	}
`;

const EquipmentSection = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 3rem;

	img {
		border-radius: 18px;
	}

	ul {
		margin: 0 1.5rem;
	}
`;

const StatusSection = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 3rem;

	li {
		display: flex;
		align-items: center;
	}
`;

export default Profiles;
