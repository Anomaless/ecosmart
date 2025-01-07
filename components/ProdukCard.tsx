import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Link from "next/link";

interface Product {
  id: string;
  imageUrl: string;
  productName: string;
  ownerName: string;
  priceProduct: string;
  selectedEcommerce: string; // Ensure this property is included
  whatsappNumber: string; // Add this line
}

interface ProdukCardProps {
  product: Product;
}

const formatRupiah = (number: string) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(Number(number));
};

const ProdukCard: React.FC<ProdukCardProps> = ({ product }) => {
  return (
    <Card sx={{ width: 370 }}>
      <div>
        <Typography level="title-lg">{product.productName}</Typography>
        <Typography level="body-sm">
          {product.ownerName} | {product.selectedEcommerce}
        </Typography>
        <IconButton
          aria-label="bookmark product"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={product.imageUrl} alt={product.productName} loading="lazy" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Harga:</Typography>
          <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
            {formatRupiah(product.priceProduct)}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="success"
          aria-label="Contact via WhatsApp"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          component="a"
          href={`https://wa.me/${product.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProdukCard;
