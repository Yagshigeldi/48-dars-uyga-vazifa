export function validateBody(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            next(error);
        }
    }
}