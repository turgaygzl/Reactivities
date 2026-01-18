import MenuItem from "@mui/material/MenuItem/MenuItem";
import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { colors } from "../../../lib/colors";

export default function MenuItemLink({ children, to }: { children: ReactNode, to: string }) {
    return (
        <MenuItem
            component={NavLink} to={to}
            sx={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: 'inherit',
                position: 'relative',
                '&.active': {
                    color: colors.primary.a20

                },
                '&.active::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '2px',
                    width: '2.8rem',
                    backgroundColor: colors.primary.a20,
                    borderRadius: '10px',

                },
                '&:hover': {
                    background: 'none',

                },
                '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '2px',
                    width: '2.8rem',
                    backgroundColor: colors.primary.a20,
                    borderRadius: '10px',
                }
            }}>

            {children}
        </MenuItem>
    )
}