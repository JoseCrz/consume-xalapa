import React from "react";
import PropTypes from "prop-types";
import { BiWorld, BiPhone } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import {
  Card,
  CardBody,
  Img,
  Category,
  Name,
  Type,
  Hours,
  Div,
  Tags,
  Tag,
  Title,
  Actions,
  Cta,
  A,
} from "./style";

export const RestoCard = ({
  tags,
  menu,
  name,
  category,
  opens,
  closes,
  channel,
  website,
  phone,
  whatsapp,
  facebook,
  instagram,
  imageUrl,
  address,
}) => {
  const CtaChooser = ({ channel }) => {
    if (channel === "whatsapp") {
      return (
        <Cta
          href={`https://wa.me/521${whatsapp}?text=Quisiera hacer un pedido`}
        >
          Ordenar
        </Cta>
      );
    }

    if (channel === "facebook") {
      return <Cta href={`${facebook}`}>Ordenar</Cta>;
    }

    if (channel === "instagram") {
      return <Cta href={`${instagram}`}>Ordenar</Cta>;
    }

    return <Cta href={`tel:+521${phone}`}>Ordenar</Cta>;
  };

  return (
    <Card>
      <div>
        <Img src={imageUrl} />
      </div>
      <CardBody>
        <Div>
          <Category>Restaurant</Category>
          <Hours> {`${opens} - ${closes}`} </Hours>
          <Name>{name}</Name>
          <Type>{category}</Type>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>
                <span>{tag}</span>
              </Tag>
            ))}
          </Tags>
        </Div>
        <div>
          <Title>Favoritos:</Title>
          <ul>
            {menu.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <Actions>
          <CtaChooser channel={channel} />
        </Actions>
        <div>
          {website && (
            <A href={website}>
              {" "}
              <BiWorld /> {name}
            </A>
          )}
          {phone && (
            <A href={`tel:+521${phone}`}>
              <BiPhone />
              {phone}
            </A>
          )}
          {address && (
            <A>
              <MdLocationOn />
              {address}
            </A>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

RestoCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
};
