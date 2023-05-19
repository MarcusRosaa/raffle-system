import { useMemo, useState, useEffect } from "react";
import * as S from "./styles";
import { FiX, FiTrash, FiEdit, FiEye } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

import { Button, IconButton } from "evergreen-ui";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import currencyFormat from "../../services/currencyFormat";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";

// import { useAdmin } from "../../../contexts/AdminContext";

export const AccordionComponent = ({
  accordionData,
  isMenuOpen,
  handleOpenEditModal,
  searchValue,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  const [raffleImageActive, setRaffleImageActive] = useState();

  const [filteredPostsData, setFilteredPostsData] = useState([]);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ================================

  // const {
  //   accordionData,
  //   handleCreateBlogPost,
  //   handleEditBlogPost,
  //   handleDeleteBlogPost,
  // } = useAdmin();

  // ================================ DELETE

  // const handleOpenDeleteModal = (postId) => {
  //   setPostIdToDelete(postId);
  //   setIsDeleteModalOpen(true);
  // };
  // const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  // useEffect(() => {
  //   console.log(postIdToDelete);
  // }, [postIdToDelete]);

  // const handleDeletePost = () => {
  //   handleDeleteBlogPost(postIdToDelete);
  //   handleCloseDeleteModal();
  // };

  const handleEditPost = (postId) => {
    handleOpenEditModal(postId);
  };

  // ================================ SEARCH

  useEffect(() => {
    if (searchValue !== "") {
      const filtered = accordionData.filter(
        (post) =>
          post.postTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
          post.postContent.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPostsData(filtered);
    }
  }, [searchValue, accordionData]);

  const accordionDataList = useMemo(() => {
    if (searchValue !== "") return filteredPostsData;

    return accordionData || [];
  }, [filteredPostsData, searchValue, accordionData]);

  // ================================

  const formatDate = (timestamp) => {
    if (!timestamp) return;

    const date = new Date(timestamp.seconds * 1000);
    return `${date.toLocaleDateString("pt-BR", {
      weekday: "long",
      // year: "numeric",
      month: "long",
      day: "numeric",
    })} às ${date.toLocaleTimeString("pt-BR")}`;
  };

  return (
    <>
      <S.AccordionContainer>
        <S.AccordionWrapper>
          {accordionDataList?.map((raffle) => {
            return (
              <S.Accordion key={raffle.rafflesId}>
                <Accordion
                  expanded={expanded === raffle.rafflesId}
                  onChange={handleChange(raffle.rafflesId)}
                  className="accordion"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    className="accordion_header"
                  >
                    <S.AccordionHeader>
                      <S.AccordionHeaderImage>
                        <img src={raffle.rafflesImages[0]} alt="" />
                      </S.AccordionHeaderImage>
                      <S.AccordionHeaderLegend>
                        <S.AccordionHeaderTitle>
                          {raffle.rafflesTitle}
                        </S.AccordionHeaderTitle>
                        <S.AccordionHeaderDate>
                          Data de criação do sorteio:{" "}
                          <b>{raffle.rafflesDate}</b>
                        </S.AccordionHeaderDate>
                      </S.AccordionHeaderLegend>
                      <S.AccordionDetailsInfosQuantityContainer className="faturamento">
                        <p>
                          <MdOutlineAttachMoney /> Faturamento
                        </p>
                        <span>{currencyFormat(raffle.rafflesFaturing)}</span>
                      </S.AccordionDetailsInfosQuantityContainer>
                    </S.AccordionHeader>
                  </AccordionSummary>
                  <AccordionDetails className="accordion_content">
                    <S.AccordionDetails isOpen={isMenuOpen}>
                      <S.AccordionDetailsImageContainer isOpen={isMenuOpen}>
                        <S.AccordionDetailsImage isOpen={isMenuOpen}>
                          <img
                            src={raffleImageActive || raffle.rafflesImages[0]}
                            alt=""
                          />
                        </S.AccordionDetailsImage>
                        <S.AccordionDetailsImageThumbs>
                          {raffle.rafflesImages.map((images) => (
                            <S.AccordionDetailsImageThumb
                              key={images}
                              isActive={images === raffleImageActive}
                              onClick={() => setRaffleImageActive(images)}
                            >
                              <img src={images} alt="" />
                            </S.AccordionDetailsImageThumb>
                          ))}
                        </S.AccordionDetailsImageThumbs>
                      </S.AccordionDetailsImageContainer>
                      <S.AccordionDetailsMain isOpen={isMenuOpen}>
                        <S.AccordionDetailsTitle>
                          <h1>{raffle.rafflesTitle}</h1>
                          <h2>{raffle.rafflesSubtitle}</h2>
                        </S.AccordionDetailsTitle>
                        <S.AccordionDetailsContent>
                          {raffle.rafflesAwards.map((award, index) => {
                            const iconToRender =
                              index + 1 === 1 ? (
                                <BsAward />
                              ) : index + 1 === 2 ? (
                                <BsAward />
                              ) : (
                                <BsAward />
                              );

                            return (
                              <S.AccordionDetailsAwards
                                key={award.awardId}
                                content={index + 1}
                              >
                                {iconToRender} {award.awardTitle}
                              </S.AccordionDetailsAwards>
                            );
                          })}
                        </S.AccordionDetailsContent>
                      </S.AccordionDetailsMain>
                      <S.AccordionDetailsInfos isOpen={isMenuOpen}>
                        <div className="container">
                          <S.AccordionDetailsInfosQuantityContainer className="main">
                            <p>Número de cotas</p>
                            <span>{raffle.rafflesStock}</span>
                          </S.AccordionDetailsInfosQuantityContainer>
                          <S.AccordionDetailsInfosQuantityContainer className="main">
                            <p>Cotas vendidas</p>
                            <span>
                              {raffle.rafflesStock - raffle.rafflesCurrentStock}
                            </span>
                          </S.AccordionDetailsInfosQuantityContainer>
                          <S.AccordionDetailsInfosQuantityContainer className="main">
                            <p>Estoque de cotas atual</p>
                            <span>{raffle.rafflesCurrentStock}</span>
                          </S.AccordionDetailsInfosQuantityContainer>
                        </div>
                        <S.AccordionDetailsLegend>
                          <p>
                            <b>Preço da cota:</b>
                          </p>
                          <span>{currencyFormat(raffle.rafflesQuota)}</span>
                        </S.AccordionDetailsLegend>
                        <S.AccordionDetailsLegend>
                          <p>
                            Desconto <b>10 cotas</b>:
                          </p>
                          <span>
                            {currencyFormat(
                              raffle.rafflesDescounts.descounIfTen
                            )}
                          </span>
                        </S.AccordionDetailsLegend>
                        <S.AccordionDetailsLegend>
                          <p>
                            Desconto <b>20 cotas</b>:
                          </p>
                          <span>
                            {currencyFormat(
                              raffle.rafflesDescounts.descounIfTwenty
                            )}
                          </span>
                        </S.AccordionDetailsLegend>
                        <S.AccordionDetailsLegend>
                          <p>
                            Desconto <b>30 cotas</b>:
                          </p>
                          <span>
                            {currencyFormat(
                              raffle.rafflesDescounts.descounIfThird
                            )}
                          </span>
                        </S.AccordionDetailsLegend>
                        <S.AccordionDetailsLegend>
                          <p>
                            Desconto <b>40 cotas</b>:
                          </p>
                          <span>
                            {currencyFormat(
                              raffle.rafflesDescounts.descounIfForty
                            )}
                          </span>
                        </S.AccordionDetailsLegend>
                      </S.AccordionDetailsInfos>
                    </S.AccordionDetails>
                    <S.AccordionDetailsMenu>
                      <IconButton icon={FiEye} onClick={() => {}} />
                      <IconButton
                        icon={FiEdit}
                        disabled
                        onClick={() => handleEditPost(raffle.id)}
                      />
                      <IconButton
                        icon={FiTrash}
                        onClick={() => {}}
                        intent="danger"
                      />
                    </S.AccordionDetailsMenu>
                  </AccordionDetails>
                </Accordion>
              </S.Accordion>
            );
          })}
        </S.AccordionWrapper>
      </S.AccordionContainer>

      {/* <Dialog
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <S.DialogTitle>Deletar Publicação</S.DialogTitle>
        </DialogTitle>
        <DialogContent>
          <S.DialogContent>
            Você tem certeza que deseja deletar essa publicação?
          </S.DialogContent>
        </DialogContent>
        <DialogActions>
          <Button intent="none" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
          <Button intent="danger" onClick={handleDeletePost}>
            Deletar
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default AccordionComponent;
