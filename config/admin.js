module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '624a9b6bd20ee51d0ed06dd4bbdd1713'),
  },
});
