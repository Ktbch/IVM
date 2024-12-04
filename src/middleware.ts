import { NextRequest } from "next/server"
import { sessionHandler, TSession } from "./lib/auth/sessions"
import { NAVIGATION_LINKS } from "./shared/constants"





function locationOfUserAndStatusBooleanGenerator (session: TSession, request: NextRequest) {
    return {
        userIsinAuthPageAndLoggedIn: (request.url.includes('signin') || request.url.includes('signup')) && !!session,
        userIsIndashBoardAndLoggedIn: request.url.includes('dashboard') && !session
    }
}

export const middleware = async (request: NextRequest) => {
    const session = await sessionHandler.getSession()
    const { userIsIndashBoardAndLoggedIn, userIsinAuthPageAndLoggedIn } = locationOfUserAndStatusBooleanGenerator(session, request)



    if (userIsinAuthPageAndLoggedIn)
    {
        return Response.redirect(new URL(NAVIGATION_LINKS.redirectLinks.dashbaord, request.url))
    }

    if (userIsIndashBoardAndLoggedIn)
    {
        return Response.redirect(new URL(NAVIGATION_LINKS.redirectLinks.signIn, request.url))
    }
}
