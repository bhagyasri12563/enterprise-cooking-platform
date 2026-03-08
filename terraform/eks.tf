resource "aws_eks_cluster" "cluster" {
  name = "enterprise-catering-cluster"
  role_arn = "arn:aws:iam::738222620717:role/EKSRole"
  vpc_config {
    subnet_ids = [
      aws_subnet.public1.id,
      aws_subnet.public2.id
      ]
 }

}
