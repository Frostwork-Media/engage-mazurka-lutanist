import * as z from "zod";

export type Project = z.infer<typeof projectSchema>;

const location = z.object({
  x: z.number(),
  y: z.number(),
});

const nodeLocation = z.record(location);

export type NodeLocation = z.infer<typeof nodeLocation>;

export const projectSchema = z
  .object({
    squiggle: z.string(),
    subject: z.string(),
    nodeLocation: z.optional(nodeLocation),
    renderPercentages: z.optional(z.boolean()),
  })
  .strict();

// This is a blank project file

export const getEmptyProject: () => Project = () => ({
  squiggle: "",
  subject: "",
  nodeLocation: {},
  renderPercentages: false,
});
