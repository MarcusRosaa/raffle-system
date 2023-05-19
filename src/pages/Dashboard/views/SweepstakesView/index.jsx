import { useCallback, useMemo, useState, Fragment } from "react";
import * as S from "./styles";
import { FiX } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import {
  MainButton,
  SearchInput,
  MainInput,
  MainTextArea,
  MainButtonConfirm,
  MiniButton,
  Label,
  LabelLegend,
  FileUploader,
  DateInput,
} from "../../../../utils/inputs";

import { useSweepstakesView } from "../../views/SweepstakesView/context";

import { AccordionComponent } from "../../../../components/Accordion";
import {
  toaster,
  Alert,
  FileCard,
  FileTypes,
  majorScale,
  FileRejectionReason,
} from "evergreen-ui";

import currencyFormatter from "currency-formatter";
import useDateValidation from "../../../../hooks/useDateValidation";

const SweepstakesView = () => {
  const [searchValue, setSearchValue] = useState("");

  const {
    isOnEditMode,
    // handleActiveSweepstakesEditMode,
    // handleDesactiveSweepstakesEditMode,

    isOpenSweepstakesViewMenu,
    handleOpenSweepstakesViewMenu,
    handleCloseSweepstakesViewMenu,

    sweepstakesList,
  } = useSweepstakesView();

  return (
    <S.SweepstakesView>
      <S.SweepstakesViewMain isActive={isOpenSweepstakesViewMenu}>
        <S.SweepstakesViewMainHeader>
          <S.SweepstakesViewMainHeaderSearch>
            <SearchInput
              placeholder="Pesquise aqui ..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              width="100%"
              height="40px"
            />
          </S.SweepstakesViewMainHeaderSearch>

          <S.SweepstakesViewMainHeaderMenus>
            <MainButton onClick={handleOpenSweepstakesViewMenu}>
              Criar Sorteio
            </MainButton>
          </S.SweepstakesViewMainHeaderMenus>
        </S.SweepstakesViewMainHeader>
        <S.SweepstakesViewMainContainer>
          <AccordionComponent
            accordionData={sweepstakesList}
            isMenuOpen={isOpenSweepstakesViewMenu}
            handleOpenEditModal={handleOpenSweepstakesViewMenu}
            searchValue={searchValue}
          />
        </S.SweepstakesViewMainContainer>
      </S.SweepstakesViewMain>
      <S.SweepstakesViewMenu isActive={isOpenSweepstakesViewMenu}>
        <S.SweepstakesViewMenuHeader>
          <span>
            <S.HeaderTitle>Novo Sorteio</S.HeaderTitle>
            <S.HeaderLegend>
              Campos com <b>*</b> são obrigatórios
            </S.HeaderLegend>
          </span>
          <S.HeaderClose onClick={handleCloseSweepstakesViewMenu}>
            <FiX />
          </S.HeaderClose>
        </S.SweepstakesViewMenuHeader>
        <S.SweepstakesViewMenuContainer>
          <CreateSweepstakesForm isOnEditMode={isOnEditMode} />
        </S.SweepstakesViewMenuContainer>
      </S.SweepstakesViewMenu>
    </S.SweepstakesView>
  );
};

export default SweepstakesView;

// ========================================================== CREATE SWEEPSTAKES FORM

const formatMoneyValue = (inputValue) => {
  const priceValue = Number(inputValue.replace(/[^0-9]/g, "")) / 100;
  return priceValue;
};

const formatDateValue = (dateString) => {
  if (!dateString) return "";
  const onlyNums = dateString.replace(/[^\d]/g, "");
  if (onlyNums.length <= 2) return onlyNums;
  if (onlyNums.length <= 4)
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(
    4,
    6
  )}`;
};

export const CreateSweepstakesForm = ({ isOnEditMode }) => {
  const [validateDate] = useDateValidation();

  // const acceptedMimeTypes = [FileTypes.PNG, FileTypes.JPEG, FileTypes.JPG];
  const acceptedMimeTypes = useMemo(
    () => ["image/jpeg", "image/png", "image/jpg"],
    []
  );

  const maxFiles = 5;
  const maxSizeInBytes = 50 * 1024 ** 2; // 50 MB
  const [files, setFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);

  const [sweepstakesTitleValue, setSweepstakesTitleValue] = useState("");
  const [sweepstakesLegendValue, setSweepstakesLegendValue] = useState("");
  const [sweepstakesQuotasQuantityValue, setSweepstakesQuotasQuantityValue] =
    useState(0);
  const [sweepstakesUnitPriceValue, setSweepstakesUnitPriceValue] =
    useState("");
  const [
    sweepstakesPromocionalPrice10Value,
    setSweepstakesPromocionalPrice10Value,
  ] = useState("");
  const [
    sweepstakesPromocionalPrice20Value,
    setSweepstakesPromocionalPrice20Value,
  ] = useState("");
  const [
    sweepstakesPromocionalPrice30Value,
    setSweepstakesPromocionalPrice30Value,
  ] = useState("");
  const [
    sweepstakesPromocionalPrice40Value,
    setSweepstakesPromocionalPrice40Value,
  ] = useState("");
  const [sweepstakesAwardFirstValue, setSweepstakesArardFirstValue] =
    useState("");
  const [sweepstakesArardSecondValue, setSweepstakesArardSecondValue] =
    useState("");
  const [sweepstakesArardThirdValue, setSweepstakesArardThirdValue] =
    useState("");
  const [sweepstakesDateValue, setSweepstakesDateValue] = useState("");

  const formattedPrice = (price) => {
    return currencyFormatter.format(price, { locale: "pt-BR" });
  };

  // =========================================== VALIDAÇÕES

  const [dateValueIsInvalid, setDateValueIsInvalid] = useState(false);

  // ===========================================

  const handleClearForm = () => {
    setSweepstakesTitleValue("");
    setSweepstakesUnitPriceValue("");
    setSweepstakesPromocionalPrice10Value("");
    setSweepstakesPromocionalPrice20Value("");
    setSweepstakesPromocionalPrice30Value("");
    setSweepstakesPromocionalPrice40Value("");
    setSweepstakesArardFirstValue("");
    setSweepstakesArardSecondValue("");
    setSweepstakesArardThirdValue("");
    setSweepstakesDateValue("");
  };

  const handleChangeSweepstakesUnitPrice = (e) => {
    setSweepstakesUnitPriceValue(formatMoneyValue(e.target.value));
  };

  const handleChangeSweepstakesPrice10Value = (e) => {
    setSweepstakesPromocionalPrice10Value(formatMoneyValue(e.target.value));
  };

  const handleChangeSweepstakesPrice20Value = (e) => {
    setSweepstakesPromocionalPrice20Value(formatMoneyValue(e.target.value));
  };

  const handleChangeSweepstakesPrice30Value = (e) => {
    setSweepstakesPromocionalPrice30Value(formatMoneyValue(e.target.value));
  };

  const handleChangeSweepstakesPrice40Value = (e) => {
    setSweepstakesPromocionalPrice40Value(formatMoneyValue(e.target.value));
  };

  const handleChangeSweepstakesDateValue = (e) => {
    const { value: inputValue } = e.target;
    const formatedValue = inputValue.replace(/[^\d/]/g, "");

    if (formatedValue.length === 9) return;

    if (formatedValue.length === 8) {
      const isValid = validateDate(formatedValue);
      setDateValueIsInvalid(isValid);
    }

    // console.log(inputValue.replace(/[^\d/]/g, ""));

    setSweepstakesDateValue(formatedValue);
  };

  // ====================================== IMAGES CONTROLL

  const rebaseFiles = (files, options) => {
    const filteredFiles = files.filter((file) => {
      const isAcceptedMimeType = options.acceptedMimeTypes.includes(file.type);
      const isUnderMaxSize = file.size <= options.maxSizeInBytes;

      return isAcceptedMimeType && isUnderMaxSize;
    });

    const slicedFiles = filteredFiles.slice(0, options.maxFiles);

    const accepted = slicedFiles;
    const rejected = files.filter((file) => !accepted.includes(file));

    return { accepted, rejected };
  };

  const handleRemove = useCallback(
    (file) => {
      const updatedFiles = files.filter(
        (existingFile) => existingFile !== file
      );
      const updatedFileRejections = fileRejections.filter(
        (fileRejection) => fileRejection.file !== file
      );

      const { accepted, rejected } = rebaseFiles(
        [
          ...updatedFiles,
          ...updatedFileRejections.map((fileRejection) => fileRejection.file),
        ],
        { acceptedMimeTypes, maxFiles, maxSizeInBytes }
      );

      setFiles(accepted);
      setFileRejections(rejected);
    },
    [acceptedMimeTypes, files, fileRejections, maxFiles, maxSizeInBytes]
  );

  const values = useMemo(
    () => [
      ...files,
      ...fileRejections.map((fileRejection) => fileRejection.file),
    ],
    [files, fileRejections]
  );

  const fileCountOverLimit = files.length + fileRejections.length - maxFiles;
  const fileCountError = `O limite é 5 fotos. Remova ${fileCountOverLimit} ${
    fileCountOverLimit === 1 ? "foto" : "fotos"
  }.`;

  // ======================================

  const createReply = () => {
    if (
      sweepstakesTitleValue === "" ||
      sweepstakesUnitPriceValue === "" ||
      sweepstakesPromocionalPrice10Value === "" ||
      sweepstakesPromocionalPrice20Value === "" ||
      sweepstakesPromocionalPrice30Value === "" ||
      sweepstakesPromocionalPrice40Value === "" ||
      sweepstakesAwardFirstValue === "" ||
      sweepstakesArardSecondValue === "" ||
      sweepstakesArardThirdValue === "" ||
      setSweepstakesDateValue === ""
    ) {
      toaster.warning(
        "Preencha todos os campos para criar uma Resposta Automática"
      );
      return;
    }
    // handleCreateReply(sweepstakesUnitPriceValue, sweepstakesTitleValue);
    handleClearForm();

    // setIsOpenEditSavedReplyMode(false);
    // setIsOpenDeleteSavedReplyModal(false);

    toaster.success("Resposta Automática criada com sucesso!");
  };

  return (
    <S.CreateSweepstakesForm>
      <span>
        <Label
          htmlFor="sweepstakes-textarea"
          marginRight="auto"
          display="block"
        >
          Adicione <b>fotos</b> do sorteio *
        </Label>
        <FileUploader
          acceptedMimeTypes={acceptedMimeTypes}
          // label="Upload Files"
          description="Você pode adicionar até 5 imagens. Para adicionar mais que uma imagem, clique no botão abaixo e selecione todas as imagens de uma única vez, utilizando o comando: [ SHIFT + Click ]"
          browseOrDragText={() => {
            return (
              <h3>
                <b>Selecione</b> um arquivo
              </h3>
            );
          }}
          disabled={files.length + fileRejections.length >= maxFiles}
          maxSizeInBytes={maxSizeInBytes}
          maxFiles={maxFiles}
          onAccepted={setFiles}
          onRejected={setFileRejections}
          renderFile={(file, index) => {
            const { name, size, type } = file;
            const renderFileCountError = index === 0 && fileCountOverLimit > 0;

            const fileRejection = fileRejections.find(
              (fileRejection) =>
                fileRejection.file === file &&
                fileRejection.reason !== FileRejectionReason.OverFileLimit
            );
            const { message } = fileRejection || {};

            return (
              <Fragment key={`${file.name}-${index}`}>
                {renderFileCountError && (
                  <Alert
                    intent="danger"
                    marginBottom={majorScale(2)}
                    title={fileCountError}
                  />
                )}
                <FileCard
                  isInvalid={fileRejection != null}
                  name={name}
                  onRemove={() => handleRemove(file)}
                  sizeInBytes={size}
                  type={type}
                  validationMessage={message}
                />
              </Fragment>
            );
          }}
          values={values}
        />
      </span>

      <span className="divisor">Principal</span>

      <span>
        <Label htmlFor="sweepstakes-title" marginRight="auto" display="block">
          Crie um <b>título</b> para o sorteio *
        </Label>
        <MainInput
          id="sweepstakes-title"
          placeholder="Adicione a legenda"
          value={sweepstakesTitleValue}
          onChange={(e) => setSweepstakesTitleValue(e.target.value)}
        />
      </span>

      <span>
        <Label htmlFor="sweepstakes-legend" marginRight="auto" display="block">
          Crie uma <b>legenda</b> para o sorteio *
        </Label>
        <MainTextArea
          id="sweepstakes-legend"
          placeholder="Adicione a legenda"
          value={sweepstakesLegendValue}
          onChange={(e) => setSweepstakesLegendValue(e.target.value)}
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-date-value"
          marginRight="auto"
          display="block"
        >
          <b>Data</b> do sorteio *
        </Label>
        <MainInput
          id="sweepstakes-date-value"
          placeholder="DD/MM/AA"
          value={formatDateValue(sweepstakesDateValue)}
          onChange={handleChangeSweepstakesDateValue}
          isInvalid={!dateValueIsInvalid}
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-first-place"
          marginRight="auto"
          display="block"
        >
          <b>Prêmio</b> para o <b>1º lugar</b> *
        </Label>
        <MainInput
          id="sweepstakes-first-place"
          placeholder="Adicione um título para o prêmio"
          value={sweepstakesAwardFirstValue}
          onChange={(e) => setSweepstakesArardFirstValue(e.target.value)}
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-second-place"
          marginRight="auto"
          display="block"
        >
          <b>Prêmio</b> para o <b>2º lugar</b>
        </Label>
        <MainInput
          id="sweepstakes-second-place"
          placeholder="Adicione um título para o prêmio"
          value={sweepstakesArardSecondValue}
          onChange={(e) => setSweepstakesArardFirstValue(e.target.value)}
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-third-place"
          marginRight="auto"
          display="block"
        >
          <b>Prêmio</b> para o <b>3º lugar</b>
        </Label>
        <MainInput
          id="sweepstakes-third-place"
          placeholder="Adicione um título para o prêmio"
          value={sweepstakesArardThirdValue}
          onChange={(e) => setSweepstakesArardFirstValue(e.target.value)}
        />
      </span>

      <span className="divisor cotas">Cotas</span>

      <span>
        <Label
          htmlFor="sweepstakes-quotas-quatity"
          marginRight="auto"
          display="block"
        >
          <b>Quantidade</b> de cotas *
        </Label>
        <MainInput
          id="sweepstakes-quotas-quatity"
          placeholder="Insira uma quantidade entre 1 e 1000"
          value={sweepstakesQuotasQuantityValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (
              inputValue === "" ||
              (parseInt(inputValue) <= 1000 && parseInt(inputValue) >= 1)
            ) {
              setSweepstakesQuotasQuantityValue(inputValue);
            }
          }}
          inputMode="numeric"
          pattern="[0-9]*"
          max={1000}
          isInvalid={sweepstakesQuotasQuantityValue === 0}
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-unit-value"
          marginRight="auto"
          display="block"
        >
          Valor de <b>1 cota</b> *
        </Label>
        <MainInput
          id="sweepstakes-unit-value"
          placeholder="Adicione um valor em R$"
          value={formattedPrice(sweepstakesUnitPriceValue)}
          onChange={handleChangeSweepstakesUnitPrice}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-descount-10-value"
          marginRight="auto"
          display="block"
        >
          <b>Desconto</b> promocional de <b>10 cotas</b>
        </Label>
        <LabelLegend
          htmlFor="sweepstakes-descount-10-value"
          marginRight="auto"
          display="block"
        >
          Valor atual: <b>R$ 11.35</b>, com desconto <b>R$ 9.90</b>
        </LabelLegend>
        <MainInput
          id="sweepstakes-descount-10-value"
          placeholder="Adicione um valor em R$"
          value={formattedPrice(sweepstakesPromocionalPrice10Value)}
          onChange={handleChangeSweepstakesPrice10Value}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-descount-20-value"
          marginRight="auto"
          display="block"
        >
          <b>Desconto</b> promocional de <b>20 cotas</b>
        </Label>
        <LabelLegend
          htmlFor="sweepstakes-descount-20-value"
          marginRight="auto"
          display="block"
        >
          Valor atual: <b>R$ 11.35</b>, com desconto <b>R$ 9.90</b>
        </LabelLegend>
        <MainInput
          id="sweepstakes-descount-20-value"
          placeholder="Adicione um valor em R$"
          value={formattedPrice(sweepstakesPromocionalPrice20Value)}
          onChange={handleChangeSweepstakesPrice20Value}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-descount-30-value"
          marginRight="auto"
          display="block"
        >
          <b>Desconto</b> promocional de <b>30 cotas</b>
        </Label>
        <LabelLegend
          htmlFor="sweepstakes-descount-30-value"
          marginRight="auto"
          display="block"
        >
          Valor atual: <b>R$ 11.35</b>, com desconto <b>R$ 9.90</b>
        </LabelLegend>
        <MainInput
          id="sweepstakes-descount-30-value"
          placeholder="Adicione um valor em R$"
          value={formattedPrice(sweepstakesPromocionalPrice30Value)}
          onChange={handleChangeSweepstakesPrice30Value}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </span>

      <span>
        <Label
          htmlFor="sweepstakes-descount-40-value"
          marginRight="auto"
          display="block"
        >
          <b>Desconto</b> promocional de <b>40 cotas</b>
        </Label>
        <LabelLegend
          htmlFor="sweepstakes-descount-40-value"
          marginRight="auto"
          display="block"
        >
          Valor atual: <b>R$ 11.35</b>, com desconto <b>R$ 9.90</b>
        </LabelLegend>

        <MainInput
          id="sweepstakes-descount-40-value"
          placeholder="Adicione um valor em R$"
          value={formattedPrice(sweepstakesPromocionalPrice40Value)}
          onChange={handleChangeSweepstakesPrice40Value}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </span>

      <MainButtonConfirm marginTop={10} onClick={createReply}>
        {isOnEditMode ? "Editar Sorteio" : "Criar Sorteio"}
      </MainButtonConfirm>
    </S.CreateSweepstakesForm>
  );
};
